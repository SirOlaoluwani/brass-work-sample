import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

import Spacer from "..";

describe("<Spacer />", () => {
  it("has height of 50px ", () => {
    const element = renderer
      .create(<Spacer height={50} />)
      .toJSON() as ReactTestRendererJSON;
    expect(element?.props?.style[1].height).toBe(50);
  });

  it("has width of 10px ", () => {
    const element = renderer
      .create(<Spacer width={10} />)
      .toJSON() as ReactTestRendererJSON;
    expect(element?.props?.style[1].width).toBe(10);
  });
});
