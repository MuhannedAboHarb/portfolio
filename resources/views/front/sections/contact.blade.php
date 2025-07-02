<!-- قسم التواصل -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>تواصل معي</h2>
                <div class="underline"></div>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <h3>البريد الإلكتروني</h3>
                        <p>muhannedprof@gmail.com
                        </p>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-github"></i>
                        <h3>GitHub</h3>
                        <a href="https://github.com/MuhannedAboHarb" target="_blank">MuhannedAboHarb</a>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-globe"></i>
                        <h3>موقع مستقل</h3>
                        <a href="https://mostaql.com/u/Muhanned28/portfolio" target="_blank">Muhanned28</a>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-instagram"></i>
                        <h3>Instagram</h3>
                        <a href="https://www.instagram.com/mo7aned.7arb" target="_blank">mo7aned.7arb</a>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm" method="POST" action="{{ route('messages.store') }}">
                        @csrf
                        <div class="form-group">
                            <label for="name">الاسم</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">البريد الإلكتروني</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">الموضوع</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">الرسالة</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn primary-btn">إرسال</button>
                    </form>
                </div>
            </div>
        </div>
    </section>