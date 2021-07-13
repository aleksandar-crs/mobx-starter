import { inject, observer } from "mobx-react";

/**
 * Injects properties used by all components (actions, helpers) into a passed component and turns it into observable
 *
 * @param component - ReactJS component that we want turned into observable and inject properties into
 * @param name - name that we want to give to this component
 * @param componentType - one of the cirkle component types listed in componentTypes.js
 */
export const setup = (component, name, componentType) => {
  let resultingComponent = inject("state", "actions", "helpers")(observer(component));

  resultingComponent.displayName = name;
  resultingComponent.componentType = componentType;

  return resultingComponent;
};

export default setup;