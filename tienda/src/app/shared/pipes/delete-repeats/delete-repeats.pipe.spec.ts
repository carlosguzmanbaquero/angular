import { DeleteRepeatsPipe } from './delete-repeats.pipe';

xdescribe('DeleteRepeats', () => {
  it('create an instance', () => {
    const pipe = new DeleteRepeatsPipe();
    expect(pipe).toBeTruthy();
  });
});
