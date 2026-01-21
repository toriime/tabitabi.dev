import * as migration_20250714_185229 from './20250714_185229';
import * as migration_20260121_145826 from './20260121_145826';

export const migrations = [
  {
    up: migration_20250714_185229.up,
    down: migration_20250714_185229.down,
    name: '20250714_185229',
  },
  {
    up: migration_20260121_145826.up,
    down: migration_20260121_145826.down,
    name: '20260121_145826'
  },
];
