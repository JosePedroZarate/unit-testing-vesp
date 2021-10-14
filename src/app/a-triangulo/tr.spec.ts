import { tr } from './tr';

describe('tr', () => {
  // #1
  it('should increment the input if is positive', () => {
    const base = 5;
    const altura = 8; 
    const result = (base * altura) / 2;
    expect(result).toBe(20);
  })
  // #2
  it('should calculate the area of the triangle with base 20 and height 13', () => {
    const base = 20;
    const altura = 13; 
    const result = (base * altura) / 2;
    expect(result).toBe(130);
  })
  // #3
  it('should calculate the area of the triangle with base 10 and height 20', () => {
    const base = 10;
    const altura = 20; 
    const result = (base * altura) / 2;
    expect(result).toBe(100);
  })
  // #4
  it('should calculate the area of the triangle with base 15 and height 25', () => {
    const base = 15;
    const altura = 25; 
    const result = (base * altura) / 2;
    expect(result).toBe(187.5);
  })
  // #5
  it('should calculate the area of the triangle with base 25 and height 35', () => {
    const base = 25;
    const altura = 35; 
    const result = (base * altura) / 2;
    expect(result).toBe(437.5);
  })
  // #6
  it('should calculate the area of the triangle with base 35 and height 45', () => {
    const base = 35;
    const altura = 45; 
    const result = (base * altura) / 2;
    expect(result).toBe(787.5);
  })
  // #7
  it('should calculate the area of the triangle with base 3 and height 4', () => {
    const base = 3;
    const altura = 4; 
    const result = (base * altura) / 2;
    expect(result).toBe(6);
  })
  // #8
  it('should calculate the area of the triangle with base 7 and height 8', () => {
    const base = 7;
    const altura = 8; 
    const result = (base * altura) / 2;
    expect(result).toBe(28);
  })
  // #9
  it('should calculate the area of the triangle with base 8 and height 12', () => {
    const base = 8;
    const altura = 12; 
    const result = (base * altura) / 2;
    expect(result).toBe(48);
  })
  // #10
  it('should calculate the area of the triangle with base 12 and height 20', () => {
    const base = 12;
    const altura = 20; 
    const result = (base * altura) / 2;
    expect(result).toBe(120);
  })
})