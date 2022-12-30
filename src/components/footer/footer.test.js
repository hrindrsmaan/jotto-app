import { shallow } from "enzyme";
import Footer from "./footer";

it("should render without errors", () => {
  const wrapper = shallow(<Footer />);
  const footerText = wrapper.find("[data-test='footer']").text();
  expect(footerText).toBe("Footer");
});
