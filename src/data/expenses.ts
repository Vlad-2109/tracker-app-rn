import { Expense } from '@/types';

export const DUMMY_EXPENSES: Expense[] = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2026-08-05'),
	},
	{
		id: 'e2',
		description: 'A pair of trousers',
		amount: 89.29,
		date: new Date('2026-08-09'),
	},
	{
		id: 'e3',
		description: 'Some bananas',
		amount: 5.99,
		date: new Date('2026-08-10'),
	},
	{
		id: 'e4',
		description: 'A book',
		amount: 14.99,
		date: new Date('2026-08-11'),
	},
	{
		id: 'e5',
		description: 'Another book',
		amount: 18.59,
		date: new Date('2026-08-12'),
	},
];
