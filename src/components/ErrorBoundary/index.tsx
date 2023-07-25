import React, { Component, ErrorInfo, ReactNode } from 'react';

import { stringConstants } from '../../types/constants';
import { ErrorDescription, Wrapper } from './styles';

const { UI_ERROR_MESSAGE } = stringConstants;

interface Props {
    children?: ReactNode;
}

interface State {
    errorsList: string[];
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            errorsList: [],
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorsList: [error.name, errorInfo.componentStack],
        });
    }

    public render() {
        const { errorsList } = this.state;
        if (errorsList.length) {
            return (
                <Wrapper>
                    <ErrorDescription>{UI_ERROR_MESSAGE}</ErrorDescription>
                </Wrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
