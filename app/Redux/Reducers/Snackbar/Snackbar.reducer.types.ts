export interface SnackbarState {
    visible: boolean;
    type: 'success' | 'error' | 'info';
    title: string;
    message?: string;
    duration?: number;
}