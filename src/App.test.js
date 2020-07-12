import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import HackerNews from './HackerNews';

test('app component render', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('HackerNews component render', () => {
  const items = [
    {
      title: 'my post',
      objectID: '123',
      num_comments: 20,
      voteCount: 20
    }
  ]
  const tree = renderer
    .create(<HackerNews items={items} upVote={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
