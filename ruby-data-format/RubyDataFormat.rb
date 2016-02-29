require 'date'

#################################################
##             CLASS DEFINITIONS               ##
#################################################

# DataManager Class
class DataManager
  # Read data from the .txt files in data dir
  def get_data(file_array)
    student_data = []

    file_array.each do |filename|
      file = File.new(filename, 'r')
      data = file.read

      student_data << data

      file.close
    end

    return student_data
  end

  # Format data by first splitting on new lines, then splitting on other delimiters
  def split_data(data)
    rows = data.map! { |x| x.split("\n") }

    rows.map! do |items|
      items.map do |item|
        if item.include? "$"
          item.split("$")
        elsif item.include? "|"
          item.split("|")
        else
          item.split(",")
        end
      end
    end

    # Flatten data to have only 1 array of arrays
    data.flatten!(1)
  end

  # Format data by stripping out any remaining whitespace after splitting
  def strip_whitespace(data)
    data.each do |student|
      student.map! { |property| property.strip }
    end
  end
end


# Class definition of Student object based on data in files
class Student
  attr_reader :last_name, :first_name, :fav_color, :m_initial
  attr_accessor :campus, :dob 

  # Initialize student object with these properties
  def initialize(last_name, first_name, campus, fav_color, dob, m_initial="")
    @last_name = last_name
    @first_name = first_name
    @campus = campus
    @fav_color = fav_color
    @dob = dob
    @m_initial = m_initial
  end

  # Student can return its info as a string
  def to_s
    return @last_name + " " + @first_name + " " + @campus + " " + @dob.month.to_s + "/" + @dob.day.to_s + "/" + @dob.year.to_s + " " + @fav_color
  end
end


class StudentManager
  # Create student objects from the data
  def create_students(data)
    students = []

    data.each do |info_ary|
      if info_ary.length == 5
        student = Student.new(info_ary[0], info_ary[1], info_ary[2], info_ary[3], info_ary[4])
      else
        # If last item in array contains a numerical digit (i.e. the DOB), swap the order of the arguments
        if info_ary[-1].match(/\d/)
          student = Student.new(info_ary[0], info_ary[1], info_ary[3], info_ary[4], info_ary[5], info_ary[2])
        else
          student = Student.new(info_ary[0], info_ary[1], info_ary[3], info_ary[5], info_ary[4], info_ary[2])
        end
      end

      students << student
    end

    return students
  end

  # Normalize all date strings as Ruby Dates
  def format_dob(students)
    students.map do |student|
      # Swap slash for dash ('/' instead of '-')
      if student.dob.include?("-")
        student.dob.gsub!("-", "/")
      end

      # Convert date string to Ruby acceptable format
      date = student.dob.split("/")
      month = date.shift
      date.insert(1, month)
      ruby_date = date.join("/")

      # Set student dob property to Ruby Date
      student.dob = Date.parse(ruby_date)
    end
  end

  # Comb for known campus abbreviations and replace them with longhand
  def format_campus(students)
    students.map do |student|
      case 
      when student.campus == "LA"
        student.campus = "Los Angeles"
      when student.campus == "NYC"
        student.campus = "New York City"
      when student.campus == "SF"
        student.campus = "San Francisco"
      else
        student.campus = student.campus
      end
    end
  end
end



#################################################
## READ & FORMAT DATA | CREATE STUDENT OBJECTS ##
#################################################

# Data files to be read
files = Dir["data/*.txt"]

# Instantiate DataManager
datamgmt = DataManager.new

# Get data from storage files
student_data = datamgmt.get_data(files)
# Split data
datamgmt.split_data(student_data)
# Strip whitespace
datamgmt.strip_whitespace(student_data)

# Instantiate StudentManager
studentmgmt = StudentManager.new
  
# Create student objects
students = studentmgmt.create_students(student_data)
# Format campus info
studentmgmt.format_campus(students)
# Format DOB
studentmgmt.format_dob(students)



#################################################
##             SORT & PRINT OUTPUT             ##
#################################################

# Method for printing output
def print_output(stored_students)
  stored_students.each { |student| puts student.to_s }
end

# Sort students by campus and print
students.sort! { |a,b| a.campus.downcase <=> b.campus.downcase }
puts "Output 1:"
print_output(students)
print "\n"

# Sort students by date of birth and print
students.sort! { |a,b| a.dob <=> b.dob }
puts "Output 2:"
print_output(students)
print "\n"

# Sort students by last name and print
students.sort! { |a,b| b.last_name.downcase <=> a.last_name.downcase }
puts "Output 3:"
print_output(students)
