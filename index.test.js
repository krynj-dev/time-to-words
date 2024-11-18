const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles o\'clock', () => {
    const timeInWords = convertTimeToWords('4:00');
    expect(timeInWords).toBe('four o\'clock');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times between 0 and 30 minutes (not quarter) - 8:11', () => {
    const timeInWords = convertTimeToWords('8:11');
    expect(timeInWords).toBe('eleven past eight');
  });

  it('Handles times between 30 and 60 minutes (not quarter) - 10:52', () => {
    const timeInWords = convertTimeToWords('10:52');
    expect(timeInWords).toBe('eight to eleven');
  });

  it('Handles twentyfour hour time  - 18:30', () => {
    const timeInWords = convertTimeToWords('18:30');
    expect(timeInWords).toBe('half past six');
  });
});
