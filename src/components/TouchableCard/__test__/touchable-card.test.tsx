import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import TouchableCard, { TouchableCardText } from "..";

describe("<TouchableCard />", () => {
  it("has 'Send money' as props and passes it down to TouchableCardText", () => {
    const testRenderer = renderer.create(<TouchableCard text="Send Money" />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(TouchableCardText).props.text).toBe(
      "Send Money"
    );
  });

  it("fired onPress event", () => {
    const mockFunc = jest.fn();
    const { getByTestId } = render(<TouchableCard onPress={mockFunc} />);
    fireEvent.press(getByTestId("touchableCardTestId"));
    expect(mockFunc).toHaveBeenCalled();
  });
});
