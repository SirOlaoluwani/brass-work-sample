import React from "react";
import renderer from "react-test-renderer";

import InputField from "..";

describe("<InputField />", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<InputField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
