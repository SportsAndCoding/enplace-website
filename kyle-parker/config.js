// kyle-parker/config.js
// Rep-specific configuration - this is the ONLY file that changes per rep

const REP_CONFIG = {
    // Required: Must match the booking_slug in the database
    slug: 'kyle-parker',

    // Display info (overrides API data if provided)
    name: 'Kyle Parker',
    title: 'Sales Representative',
    region: 'Cincinnati, OH',

    // Contact info
    email: 'godsmack1225@gmail.com',
    phone: '(513) 555-1234',

    // Photo URL (optional - will show initials if not provided)
    // photo: '/assets/reps/kyle-parker.jpg',
    photo: null,

    // Timezone for display (should match database)
    timezone: 'America/New_York'
};