import { MapPin, Phone, Mail, Clock, AlertCircle, Send, Navigation } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Rumah Sakit No. 123, Jakarta Pusat 10430',
      action: 'Buka di Maps',
      link: '#',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 21 1234 5678',
      action: 'Telepon Sekarang',
      link: 'tel:+622112345678',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'ksm.bedah@hospital.co.id',
      action: 'Kirim Email',
      link: 'mailto:ksm.bedah@hospital.co.id',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Minggu, 24 Jam',
      action: null,
      link: null,
    },
  ];

  const emergencyContacts = [
    {
      title: 'IGD (Instalasi Gawat Darurat)',
      phone: '112',
      available: '24/7',
      color: 'red',
    },
    {
      title: 'Pendaftaran & Informasi',
      phone: '+62 21 1234 5678',
      available: 'Senin-Minggu, 07:00-20:00',
      color: 'blue',
    },
    {
      title: 'Ambulans',
      phone: '119',
      available: '24/7',
      color: 'yellow',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Kontak & IGD</h1>
            <p className="text-blue-100">
              Hubungi kami untuk konsultasi, pendaftaran, atau layanan darurat 24 jam
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white mb-1">Layanan Darurat 24 Jam</div>
                <p className="text-xs text-red-100">
                  Untuk kasus darurat, hubungi IGD kami segera
                </p>
              </div>
            </div>
            <a
              href="tel:112"
              className="px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi IGD 112</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1">{info.title}</div>
                          <p className="text-xs text-gray-600 mb-2">{info.content}</p>
                          {info.action && info.link && (
                            <a
                              href={info.link}
                              className="text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                            >
                              {info.action}
                              <Navigation className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Emergency Contacts */}
              <h3 className="text-gray-900 mb-4">Kontak Darurat</h3>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className={`bg-${contact.color}-50 border border-${contact.color}-200 p-4 rounded-lg`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-900 mb-1">{contact.title}</div>
                        <p className="text-xs text-gray-600">{contact.available}</p>
                      </div>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className={`px-4 py-2 bg-${contact.color}-600 text-white rounded-lg hover:bg-${contact.color}-700 transition-colors`}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-6">Kirim Pertanyaan</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                  >
                    <option value="">Pilih subjek pertanyaan</option>
                    <option value="konsultasi">Konsultasi Bedah</option>
                    <option value="jadwal">Jadwal Operasi</option>
                    <option value="dokter">Informasi Dokter</option>
                    <option value="umum">Pertanyaan Umum</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs resize-none"
                    placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan</span>
                </button>

                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-xs">
                    Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-4">Lokasi Kami</h2>
            <p className="text-gray-600">
              Temukan kami di pusat kota dengan akses mudah
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-gray-900 mb-2">KSM Bedah</div>
                <p className="text-xs text-gray-600 mb-4">
                  Jl. Rumah Sakit No. 123, Jakarta Pusat 10430
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-xs">Buka di Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-4">Jam Pelayanan</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white mb-4">Poliklinik Bedah</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex justify-between text-xs">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Sabtu</span>
                    <span>08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Minggu & Libur</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white mb-4">IGD & Layanan Darurat</h3>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-8 h-8" />
                    <div>
                      <div className="text-white">24 Jam</div>
                      <p className="text-xs text-blue-100">Setiap Hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
