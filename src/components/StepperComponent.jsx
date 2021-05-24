import * as React from 'react';
import { Stepper } from '@progress/kendo-react-layout';
const stepperItems = [{
    label: 'Account Info',
    icon: 'k-i-lock'
}, {
    label: 'Personal Info',
    icon: 'k-i-user'
}, {
    label: 'Payment Details',
    icon: 'k-i-track-changes',
    optional: true
}];

const StepperComponent = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = e => {
        setValue(e.value);
    };

    return <Stepper value={value} onChange={handleChange} items={stepperItems} />;
};

export default StepperComponent;