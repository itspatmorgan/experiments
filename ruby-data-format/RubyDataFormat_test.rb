require 'rubygems'
gem 'minitest'
require 'minitest/autorun'
require_relative 'RubyDataFormat'

#################################################
##             MINITEST UNIT TESTS             ##
#################################################

print "\n################\n## UNIT TESTS ##\n################\n\n"

class TestDataManager < Minitest::Test
  def setup
    @files = Dir["data/*.txt"]
    @datamgmt = DataManager.new
    @student_data = []
  end

  # Check that data storage array is empty, then not empty after method is run
  def test_that_data_fills_array
    assert_empty @student_data
    @student_data = @datamgmt.get_data(@files)
    refute_empty @student_data
  end

  # Check that data starts in three groups for each file, then ends in 9 groups for each student
  def test_that_data_splits_on_delimiters
    @student_data = @datamgmt.get_data(@files)

    assert_equal 3, @student_data.length
    @datamgmt.split_data(@student_data)
    assert_equal 9, @student_data.length
  end

  # Check that example student last name changes from having whitespace to no whitespace after method run
  def test_that_whitespace_gets_stripped
    @student_data = @datamgmt.get_data(@files)
    @datamgmt.split_data(@student_data)

    assert_equal " Mckayla", @student_data[0][1]
    @datamgmt.strip_whitespace(@student_data)
    assert_equal "Mckayla", @student_data[0][1]
  end
end

class TestStudent < Minitest::Test
  def setup
    @student = Student.new("Morgan", "Patrick", "New York City", "Blue", "2/12/1990", "M")
    @students = [] << @student
    @studentmgmt = StudentManager.new
    @studentmgmt.format_dob(@students)
  end

  # Check that student properties get assigned correctly
  def test_that_student_gets_properties
    assert_equal "Morgan", @student.last_name
    assert_equal "Patrick", @student.first_name
    assert_equal "New York City", @student.campus
    assert_equal "Blue", @student.fav_color
    assert_equal Date.parse("12/2/1990"), @student.dob
    assert_equal "M", @student.m_initial
  end

  # Check that Student to_s method returns correct string combination of properties
  def test_that_student_can_tell_its_info
    assert_equal "Morgan Patrick New York City 2/12/1990 Blue", @students[0].to_s
  end
end

class TestStudentManager < Minitest::Test
  def setup
    @files = Dir["data/*.txt"]

    @datamgmt = DataManager.new
    @student_data = @datamgmt.get_data(@files)

    @datamgmt.split_data(@student_data)
    @datamgmt.strip_whitespace(@student_data)

    @studentmgmt = StudentManager.new
    @students = []
  end

  # Check that Students array is empty, then not empty. 
  # Then check that first item in Students array is an instance of the Student class.
  def test_that_student_objects_are_created
    assert_empty @students
    @students = @studentmgmt.create_students(@student_data)
    refute_empty @students

    assert_instance_of Student, @students[0]
  end

  # Check that example campus abbreviation changes from shorthand to longhand after method run
  def test_that_campus_gets_formatted
    @student = Student.new("Morgan", "Patrick", "NYC", "Blue", "2/12/1990", "M")
    @students << @student

    assert_equal "NYC", @students[0].campus
    @studentmgmt.format_campus(@students)
    assert_equal "New York City", @students[0].campus
  end

  # Check that example DOB changes from type String to type Date after method run
  def test_that_dob_converts_to_Date
    @student = Student.new("Morgan", "Patrick", "NYC", "Blue", "2/12/1990", "M")
    @students << @student

    assert_kind_of String, @students[0].dob
    @studentmgmt.format_dob(@students)
    assert_kind_of Date, @students[0].dob
  end
end
