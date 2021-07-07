const formatFullname = require('../formatFullname');
const { expect } = require('chai');

describe('formatFullname', () => {
  it('should return "Error" if called with no argument', () => {
    expect(formatFullname()).is.equal('Error');
  });
  it('should return "Error" if argument is not a string', () => {
    expect(formatFullname(undefined)).is.equal('Error');
    expect(formatFullname(1)).is.equal('Error');
    expect(formatFullname({})).is.equal('Error');
    expect(formatFullname([])).is.equal('Error');
    expect(formatFullname(function() {})).is.equal('Error');
  });
  it('should return "Error" if too many or to few words given as argument', () => {
    expect(formatFullname("word")).is.equal('Error');
    expect(formatFullname("word and another")).is.equal('Error');
    expect(formatFullname("word and another word")).is.equal('Error');
  });
  it('should return good format if called with right arguments', () => {
    expect(formatFullname('AMANDA DOE')).is.equal('Amanda Doe');
    expect(formatFullname('AManDA DoE')).is.equal('Amanda Doe');
    expect(formatFullname('amanda DOE')).is.equal('Amanda Doe');
    expect(formatFullname('amanda doe')).is.equal('Amanda Doe');
  });

})