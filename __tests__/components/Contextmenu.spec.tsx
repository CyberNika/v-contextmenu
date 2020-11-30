import { render } from "@testing-library/vue";

import { Contextmenu } from "../../src";

test("test", () => {
  const wrapper = render(Contextmenu);

  console.log(wrapper);
});
