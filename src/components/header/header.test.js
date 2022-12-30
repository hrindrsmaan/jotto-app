import { shallow } from "enzyme";

import Header from "./header";

it("should render without any errors", () => {
  const wrapper = shallow(<Header />);
  const heading = wrapper.find("[data-test='header-component']").text();
  expect(heading).toBe("Jotto App");
});
