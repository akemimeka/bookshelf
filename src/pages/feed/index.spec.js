import { Feed } from './index.js';
import { getReviews } from '../../services/index.js';

describe('Feed', () => {
  it('should be a function', () => {
    expect(typeof Feed).toBe('function');
  });
});

describe('getReviews', () => {
  it('getReviews should be a function', () => {
    expect(typeof getReviews).toBe('function');
  });
});
