import React from "react";
import renderer from "react-test-renderer";

import HorizontalLine from "..";

describe("<HorizontalLine />", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<HorizontalLine />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
