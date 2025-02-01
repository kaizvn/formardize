import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

type FieldProps = UseControllerProps & {
    render: (field: ReturnType<typeof useController>['field']) => JSX.Element;
};

export const Field: React.FC<FieldProps> = (props) => {
    const { render, ...controllerProps } = props;
    return render(useController(controllerProps).field);
};