import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import './shared/config/i18n/i18n';
import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
    throw new Error('No root element');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
