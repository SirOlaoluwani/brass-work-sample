import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import React from "react";
import TransferCard, { TransferCardBody } from "../TransferCard";
import { formatNaira } from "src/utils/formatNaira";

describe("<TransferCard />", () => {
  const mockFunc = jest.fn();
  const props = {
    amount: "1000",
    recipientName: "test name",
    status: "success",
    date: "2022-02-13T00:33:29.000Z",
    onPress: mockFunc,
    index: 0,
  };
  test("component renders transfer correctly", () => {
    const { getByTestId } = render(<TransferCard {...props} />);
    expect(getByTestId("transferCardId"));

    fireEvent.press(getByTestId("transferCardId"));
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it("card body renders values correctly", () => {
    const testRenderer = renderer.create(<TransferCard {...props} />);
    const testInstance = testRenderer.root;
    const transferCardBodies = testInstance.findAllByType(TransferCardBody);
    transferCardBodies.forEach((cardBody) => {
      switch (cardBody.props.title) {
        case "Amount":
          expect(cardBody.props.value).toBe(formatNaira("1000"));
          break;
        case "Recipient":
          expect(cardBody.props.value).toBe("test name");
        default:
          break;
      }
    });
  });
});
