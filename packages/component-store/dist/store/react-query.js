import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();
export const WrapReactQuery = ({ children }) => {
    return (_jsx(QueryClientProvider, { client: queryClient, children: children }));
};
