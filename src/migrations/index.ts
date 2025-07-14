import * as migration_20250714_185229 from './20250714_185229';

export const migrations = [
  {
    up: migration_20250714_185229.up,
    down: migration_20250714_185229.down,
    name: '20250714_185229'
  },
];
