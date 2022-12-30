import { shallow } from "enzyme";

import Congrats from "./Congrats";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = wrapper.find("[data-test='component-congrats']");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const congratsMsg = wrapper.find("[data-test='congrats-msg']").text();
  expect(congratsMsg).toBe("");
});

test("renders non-empty congrats msg when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const congratsMsg = wrapper.find("[data-test='congrats-msg']").text();
  expect(congratsMsg).toBe("Congratulations! you guessed the word");
});
