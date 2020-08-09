import { DeleteRepeats } from './delete-repeats.pipe';

describe('DeleteRepeats', () => {
  it('create an instance', () => {
    const pipe = new DeleteRepeats();
    expect(pipe).toBeTruthy();
  });
});
