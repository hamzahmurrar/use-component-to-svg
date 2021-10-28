import useComponentToSvg from '../index';

jest.useFakeTimers();

describe('useCounter tests', () => {
  it('should be defined', async () => {
    expect(useComponentToSvg).toBeDefined();
  });
});