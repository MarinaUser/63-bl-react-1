import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = date => format(new Date(date), 'Pp');
export const formatDateToNow = date => formatDistanceToNow(new Date(date));
