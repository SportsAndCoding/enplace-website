// src/components/rep.js
// Sales Rep Booking Component
// Handles calendar, time slots, and booking form

const API_BASE = 'https://enplace-api-v3-9101f20a30b4.herokuapp.com';

class RepBooking {
    constructor(config) {
        this.config = config;
        this.currentMonth = new Date();
        this.availabilityData = {};
        this.selectedDate = null;
        this.selectedSlot = null;
        this.currentStep = 1;

        this.init();
    }

    async init() {
        // Validate config
        if (!this.config || !this.config.slug) {
            this.showNotFound();
            return;
        }

        try {
            // Use config directly (API validation disabled until backend deployed)
            this.repData = this.config;

            // Render the page
            this.render();
            this.bindEvents();

            // Load availability
            await this.loadAvailability();
            this.renderCalendar();

            // Hide loading, show content
            this.hideLoading();

        } catch (error) {
            console.error('Init error:', error);
            this.showNotFound();
        }
    }

    async fetchRepData() {
        try {
            const response = await fetch(`${API_BASE}/api/sales/book/${this.config.slug}`);
            if (!response.ok) return null;

            const result = await response.json();
            return result.success ? result.rep : null;
        } catch (error) {
            console.error('Fetch rep error:', error);
            return null;
        }
    }

    async loadAvailability() {
        const start = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
        const end = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 2, 0);

        const startStr = this.formatDate(start);
        const endStr = this.formatDate(end);

        try {
            const response = await fetch(
                `${API_BASE}/api/sales/book/${this.config.slug}/availability?start_date=${startStr}&end_date=${endStr}`
            );
            const result = await response.json();

            if (result.success) {
                result.availability.forEach(day => {
                    this.availabilityData[day.date] = day;
                });
            }
        } catch (error) {
            console.error('Load availability error:', error);
        }
    }

    render() {
        const container = document.getElementById('rep-booking-app');
        if (!container) return;

        const { name, title, region, email, phone, photo } = this.repData;
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        const timezone = this.repData.timezone || 'America/New_York';
        const tzDisplay = timezone.replace(/_/g, ' ').split('/').pop();

        container.innerHTML = `
            <div class="rep">
                <div class="rep__container">
                    <!-- Loading -->
                    <div class="rep-loading" id="rep-loading">
                        <div class="rep-loading__spinner"></div>
                        <p class="rep-loading__text">Loading availability...</p>
                    </div>

                    <!-- Not Found -->
                    <div class="rep-notfound" id="rep-notfound">
                        <h2 class="rep-notfound__title">Rep Not Found</h2>
                        <p class="rep-notfound__text">This booking link is not valid. Please check the URL.</p>
                        <a href="https://www.en-place.ai" class="rep-btn rep-btn--primary">Visit En Place</a>
                    </div>

                    <!-- Main Content -->
                    <div id="rep-content" style="display: none;">
                        <!-- Hero / Rep Profile -->
                        <div class="rep-hero">
                            <div class="rep-hero__photo">
                                ${photo
                ? `<img src="${photo}" alt="${name}">`
                : `<div class="rep-hero__photo-placeholder">${initials}</div>`
            }
                            </div>
                            <h1 class="rep-hero__name">${name}</h1>
                            <p class="rep-hero__title">${title || 'Sales Representative'}</p>
                            ${region ? `<p class="rep-hero__region">📍 ${region}</p>` : ''}
                            <div class="rep-hero__contact">
                                ${phone ? `<a href="tel:${phone}">${phone}</a>` : ''}
                                ${email ? `<a href="mailto:${email}">${email}</a>` : ''}
                            </div>
                        </div>

                        <!-- Progress Steps -->
                        <div class="rep-steps">
                            <div class="rep-steps__dot rep-steps__dot--active" id="step-dot-1"></div>
                            <div class="rep-steps__dot" id="step-dot-2"></div>
                            <div class="rep-steps__dot" id="step-dot-3"></div>
                        </div>

                        <!-- Error Message -->
                        <div class="rep-error" id="rep-error"></div>

                        <!-- Step 1: Calendar -->
                        <div class="rep-section" id="step-calendar">
                            <h2 class="rep-section__header">📅 Select a Date</h2>
                            <div class="rep-calendar">
                                <div class="rep-calendar__header">
                                    <span class="rep-calendar__month" id="calendar-month"></span>
                                    <div class="rep-calendar__nav">
                                        <button class="rep-calendar__nav-btn" id="cal-prev">←</button>
                                        <button class="rep-calendar__nav-btn" id="cal-next">→</button>
                                    </div>
                                </div>
                                <div class="rep-calendar__grid" id="calendar-grid"></div>
                            </div>
                        </div>

                        <!-- Step 2: Time Slots -->
                        <div class="rep-slots" id="step-slots">
                            <h2 class="rep-slots__date" id="slots-date"></h2>
                            <div class="rep-slots__grid" id="slots-grid"></div>
                            <p class="rep-slots__timezone">All times in ${tzDisplay} timezone</p>
                            <div class="rep-btn-group">
                                <button class="rep-btn rep-btn--secondary" id="btn-back-calendar">← Back</button>
                            </div>
                        </div>

                        <!-- Step 3: Booking Form -->
                        <div class="rep-form" id="step-form">
                            <h2 class="rep-section__header">📝 Your Information</h2>
                            <form id="booking-form">
                                <div class="rep-form__group">
                                    <label class="rep-form__label">Restaurant Name *</label>
                                    <input type="text" class="rep-form__input" name="restaurant_name" required>
                                </div>
                                <div class="rep-form__row">
                                    <div class="rep-form__group">
                                        <label class="rep-form__label">Your Name *</label>
                                        <input type="text" class="rep-form__input" name="contact_name" required>
                                    </div>
                                    <div class="rep-form__group">
                                        <label class="rep-form__label">Phone *</label>
                                        <input type="tel" class="rep-form__input" name="contact_phone" required>
                                    </div>
                                </div>
                                <div class="rep-form__group">
                                    <label class="rep-form__label">Email *</label>
                                    <input type="email" class="rep-form__input" name="contact_email" required>
                                </div>
                                <div class="rep-form__group">
                                    <label class="rep-form__label">Restaurant Address (optional)</label>
                                    <input type="text" class="rep-form__input" name="location_address" placeholder="For in-person demo, or leave blank for video call">
                                </div>
                                <div class="rep-form__group">
                                    <label class="rep-form__label">Notes (optional)</label>
                                    <textarea class="rep-form__textarea" name="location_notes" placeholder="Anything you'd like us to know?"></textarea>
                                </div>
                                <div class="rep-btn-group">
                                    <button type="button" class="rep-btn rep-btn--secondary" id="btn-back-slots">← Back</button>
                                    <button type="submit" class="rep-btn rep-btn--primary" id="btn-submit">Confirm Booking</button>
                                </div>
                            </form>
                        </div>

                        <!-- Success -->
                        <div class="rep-success" id="step-success">
                            <div class="rep-success__icon">✓</div>
                            <h2 class="rep-success__title">Demo Scheduled!</h2>
                            <p class="rep-success__subtitle">You'll receive a confirmation email shortly.</p>
                            <div class="rep-success__details" id="success-details"></div>
                            <a href="https://www.en-place.ai" class="rep-btn rep-btn--secondary">Learn More About En Place</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Calendar navigation
        document.getElementById('cal-prev')?.addEventListener('click', () => this.previousMonth());
        document.getElementById('cal-next')?.addEventListener('click', () => this.nextMonth());

        // Back buttons
        document.getElementById('btn-back-calendar')?.addEventListener('click', () => this.goToStep(1));
        document.getElementById('btn-back-slots')?.addEventListener('click', () => this.goToStep(2));

        // Form submission
        document.getElementById('booking-form')?.addEventListener('submit', (e) => this.submitBooking(e));
    }

    renderCalendar() {
        const grid = document.getElementById('calendar-grid');
        const monthDisplay = document.getElementById('calendar-month');
        if (!grid || !monthDisplay) return;

        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();

        monthDisplay.textContent = new Date(year, month).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });

        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let html = days.map(d => `<div class="rep-calendar__day-header">${d}</div>`).join('');

        const firstDay = new Date(year, month, 1);
        const startPad = firstDay.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Previous month padding
        const prevMonth = new Date(year, month, 0);
        for (let i = startPad - 1; i >= 0; i--) {
            const day = prevMonth.getDate() - i;
            html += `<div class="rep-calendar__day rep-calendar__day--other">${day}</div>`;
        }

        // Current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateStr = this.formatDate(date);
            const isPast = date < today;
            const isToday = date.getTime() === today.getTime();
            const availability = this.availabilityData[dateStr];
            const hasSlots = availability && availability.available_slots > 0;
            const isSelected = this.selectedDate === dateStr;

            let classes = 'rep-calendar__day';
            if (isPast) {
                classes += ' rep-calendar__day--past';
            } else if (hasSlots) {
                classes += ' rep-calendar__day--available';
            } else {
                classes += ' rep-calendar__day--unavailable';
            }
            if (isToday) classes += ' rep-calendar__day--today';
            if (isSelected) classes += ' rep-calendar__day--selected';

            const clickable = !isPast && hasSlots;
            html += `<div class="${classes}" ${clickable ? `data-date="${dateStr}"` : ''}>${day}</div>`;
        }

        // Next month padding
        const totalCells = startPad + daysInMonth;
        const remainder = totalCells % 7;
        if (remainder > 0) {
            for (let i = 1; i <= 7 - remainder; i++) {
                html += `<div class="rep-calendar__day rep-calendar__day--other">${i}</div>`;
            }
        }

        grid.innerHTML = html;

        // Bind date clicks
        grid.querySelectorAll('[data-date]').forEach(el => {
            el.addEventListener('click', () => this.selectDate(el.dataset.date));
        });
    }

    async previousMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
        await this.loadAvailability();
        this.renderCalendar();
    }

    async nextMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
        await this.loadAvailability();
        this.renderCalendar();
    }

    async selectDate(dateStr) {
        this.selectedDate = dateStr;
        this.selectedSlot = null;
        this.renderCalendar();

        try {
            const response = await fetch(`${API_BASE}/api/sales/book/${this.config.slug}/slots?date=${dateStr}`);
            const result = await response.json();

            if (result.success) {
                this.renderSlots(result.slots, dateStr);
                this.goToStep(2);
            }
        } catch (error) {
            console.error('Load slots error:', error);
            this.showError('Failed to load available times. Please try again.');
        }
    }

    renderSlots(slots, dateStr) {
        const grid = document.getElementById('slots-grid');
        const dateDisplay = document.getElementById('slots-date');
        if (!grid || !dateDisplay) return;

        const date = new Date(dateStr + 'T12:00:00');
        dateDisplay.textContent = date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });

        if (slots.length === 0) {
            grid.innerHTML = '<div class="rep-slots__empty">No available times on this date.</div>';
            return;
        }

        let html = '';
        slots.forEach(slot => {
            const isAvailable = slot.available;
            const isSelected = this.selectedSlot === slot.start;

            let classes = 'rep-slots__slot';
            if (!isAvailable) classes += ' rep-slots__slot--unavailable';
            if (isSelected) classes += ' rep-slots__slot--selected';

            const timeDisplay = this.formatTime(slot.start);

            html += `<button type="button" class="${classes}" ${isAvailable ? `data-time="${slot.start}"` : 'disabled'}>${timeDisplay}</button>`;
        });

        grid.innerHTML = html;

        // Bind slot clicks
        grid.querySelectorAll('[data-time]').forEach(el => {
            el.addEventListener('click', () => this.selectSlot(el.dataset.time));
        });
    }

    selectSlot(time) {
        this.selectedSlot = time;

        // Update UI
        document.querySelectorAll('.rep-slots__slot').forEach(el => {
            el.classList.toggle('rep-slots__slot--selected', el.dataset.time === time);
        });

        this.goToStep(3);
    }

    goToStep(step) {
        this.currentStep = step;

        // Update step dots
        for (let i = 1; i <= 3; i++) {
            const dot = document.getElementById(`step-dot-${i}`);
            if (dot) {
                dot.classList.remove('rep-steps__dot--active', 'rep-steps__dot--complete');
                if (i < step) dot.classList.add('rep-steps__dot--complete');
                if (i === step) dot.classList.add('rep-steps__dot--active');
            }
        }

        // Show/hide sections
        document.getElementById('step-calendar').style.display = step === 1 ? 'block' : 'none';
        document.getElementById('step-slots').classList.toggle('rep-slots--active', step === 2);
        document.getElementById('step-form').classList.toggle('rep-form--active', step === 3);
    }

    async submitBooking(event) {
        event.preventDefault();

        const form = event.target;
        const submitBtn = document.getElementById('btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Booking...';

        const data = {
            restaurant_name: form.restaurant_name.value,
            contact_name: form.contact_name.value,
            contact_email: form.contact_email.value,
            contact_phone: form.contact_phone.value,
            appointment_date: this.selectedDate,
            start_time: this.selectedSlot,
            location_address: form.location_address.value || null,
            location_notes: form.location_notes.value || null
        };

        try {
            const response = await fetch(`${API_BASE}/api/sales/book/${this.config.slug}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                this.showSuccess(data);
            } else {
                this.showError(result.detail || 'Failed to book demo. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Confirm Booking';
            }
        } catch (error) {
            console.error('Booking error:', error);
            this.showError('Failed to book demo. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm Booking';
        }
    }

    showSuccess(bookingData) {
        // Hide form, show success
        document.getElementById('step-form').classList.remove('rep-form--active');
        document.getElementById('step-success').classList.add('rep-success--active');

        // Hide steps
        document.querySelector('.rep-steps').style.display = 'none';

        // Populate details
        const date = new Date(bookingData.appointment_date + 'T12:00:00');
        const dateDisplay = date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        document.getElementById('success-details').innerHTML = `
            <div class="rep-success__row">
                <span class="rep-success__label">Date</span>
                <span class="rep-success__value">${dateDisplay}</span>
            </div>
            <div class="rep-success__row">
                <span class="rep-success__label">Time</span>
                <span class="rep-success__value">${this.formatTime(bookingData.start_time)}</span>
            </div>
            <div class="rep-success__row">
                <span class="rep-success__label">Restaurant</span>
                <span class="rep-success__value">${bookingData.restaurant_name}</span>
            </div>
            <div class="rep-success__row">
                <span class="rep-success__label">Your Rep</span>
                <span class="rep-success__value">${this.repData.name}</span>
            </div>
        `;
    }

    showError(message) {
        const errorEl = document.getElementById('rep-error');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('rep-error--active');
            setTimeout(() => errorEl.classList.remove('rep-error--active'), 5000);
        }
    }

    showNotFound() {
        document.getElementById('rep-loading')?.style.setProperty('display', 'none');
        document.getElementById('rep-notfound')?.classList.add('rep-notfound--active');
    }

    hideLoading() {
        document.getElementById('rep-loading')?.style.setProperty('display', 'none');
        document.getElementById('rep-content')?.style.setProperty('display', 'block');
    }

    formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    formatTime(timeStr) {
        const [hours, minutes] = timeStr.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    }
}

export { RepBooking };