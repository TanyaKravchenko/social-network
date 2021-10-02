import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("it-kamasutra.com");
    });
});
