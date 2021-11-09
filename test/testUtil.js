import checkPropTypes from "check-prop-types";

/**
 * Return node(s) whit the given data-test attribute.
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProp = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
