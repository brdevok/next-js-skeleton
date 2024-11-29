#!/usr/bin/env ts-node
import { Plop, run } from 'plop';

Plop.prepare(
	{
		cwd: process.cwd(),
		configPath: '.scripts/plop/config.ts',
	},
	(env) => {
		// eslint-disable-next-line require-await
		return Plop.execute(env, async (_env) => {
			return run(
				{
					..._env,
					// @ts-expect-error Types doesn't match
					dest: process.cwd(),
				},
				undefined,
				true,
			);
		});
	},
);
