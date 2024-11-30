// Store regions and locations
export const REGIONS = {
  NORTHEAST: 'northeast',
  SOUTHEAST: 'southeast',
  MIDWEST: 'midwest',
  SOUTHWEST: 'southwest',
  WEST: 'west',
} as const;

export type Region = typeof REGIONS[keyof typeof REGIONS];

// Time zones for each region
export const REGION_TIMEZONES = {
  [REGIONS.NORTHEAST]: 'America/New_York',
  [REGIONS.SOUTHEAST]: 'America/New_York',
  [REGIONS.MIDWEST]: 'America/Chicago',
  [REGIONS.SOUTHWEST]: 'America/Chicago',
  [REGIONS.WEST]: 'America/Los_Angeles',
} as const;
