import { Stethoscope, Activity, HeartPulse, Syringe, Baby, CircleDot, CheckCircle2, Clock, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Bedah Umum',
      description: 'Penanganan kasus bedah umum seperti hernia, apendisitis, batu empedu, dan berbagai kondisi bedah lainnya.',
      features: [
        'Operasi hernia (inguinal, umbilical, femoral)',
        'Apendektomi (pengangkatan usus buntu)',
        'Kolesistektomi (pengangkatan kantung empedu)',
        'Operasi tiroid dan kelenjar',
      ],
      color: 'blue',
    },
    {
      icon: Activity,
      title: 'Bedah Digestif',
      description: 'Spesialisasi bedah pada sistem pencernaan termasuk lambung, usus, hati, pankreas, dan organ terkait.',
      features: [
        'Bedah lambung dan esofagus',
        'Bedah usus halus dan kolon',
        'Bedah hati dan pankreas',
        'Bedah minimal invasif (laparoskopi)',
      ],
      color: 'green',
    },
    {
      icon: HeartPulse,
      title: 'Bedah Onkologi',
      description: 'Penanganan tumor dan kanker dengan pendekatan bedah, termasuk operasi pengangkatan tumor dan rekonstruksi.',
      features: [
        'Bedah kanker payudara',
        'Bedah tumor kolorektal',
        'Bedah kanker lambung',
        'Bedah tumor jaringan lunak',
      ],
      color: 'purple',
    },
    {
      icon: Syringe,
      title: 'Bedah Vaskular',
      description: 'Penanganan penyakit pembuluh darah termasuk varises, aneurisma, dan gangguan sirkulasi.',
      features: [
        'Operasi varises',
        'Bedah aneurisma',
        'AV shunt untuk hemodialisa',
        'Revaskularisasi pembuluh darah',
      ],
      color: 'red',
    },
    {
      icon: Baby,
      title: 'Bedah Anak',
      description: 'Bedah khusus untuk pasien anak dengan penanganan yang disesuaikan dengan kebutuhan pediatrik.',
      features: [
        'Bedah kelainan bawaan',
        'Bedah saluran cerna anak',
        'Bedah urologi anak',
        'Bedah trauma anak',
      ],
      color: 'yellow',
    },
    {
      icon: CircleDot,
      title: 'Bedah Minimal Invasif',
      description: 'Teknik bedah modern dengan sayatan kecil menggunakan laparoskopi untuk pemulihan lebih cepat.',
      features: [
        'Laparoskopi diagnostik',
        'Laparoskopi terapeutik',
        'Endoskopi bedah',
        'Pemulihan lebih cepat',
      ],
      color: 'indigo',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-400',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-400',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      border: 'border-red-200',
      hover: 'hover:border-red-400',
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      border: 'border-yellow-200',
      hover: 'hover:border-yellow-400',
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      hover: 'hover:border-indigo-400',
    },
  };

  const procedures = [
    {
      icon: CheckCircle2,
      title: 'Pre-Operasi',
      description: 'Konsultasi, pemeriksaan, dan persiapan operasi',
    },
    {
      icon: Activity,
      title: 'Operasi',
      description: 'Tindakan bedah oleh tim ahli berpengalaman',
    },
    {
      icon: Clock,
      title: 'Post-Operasi',
      description: 'Perawatan intensif dan monitoring pemulihan',
    },
    {
      icon: Shield,
      title: 'Follow-Up',
      description: 'Kontrol berkala dan rehabilitasi',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Layanan Bedah</h1>
            <p className="text-blue-100">
              Kami menyediakan berbagai jenis layanan bedah dengan teknologi modern dan 
              tim dokter spesialis berpengalaman untuk hasil optimal
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Jenis Layanan Bedah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Layanan bedah komprehensif untuk berbagai kondisi medis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              
              return (
                <div
                  key={index}
                  className={`bg-white border-2 ${colors.border} ${colors.hover} p-6 rounded-2xl transition-all hover:shadow-xl`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-xs text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procedure Flow */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Alur Pelayanan Bedah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proses pelayanan yang terstruktur untuk hasil optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((procedure, index) => {
              const Icon = procedure.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span>{index + 1}</span>
                    </div>
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-gray-900 mb-2">{procedure.title}</h3>
                    <p className="text-xs text-gray-600">{procedure.description}</p>
                  </div>
                  {index < procedures.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">Mengapa Memilih Layanan Kami?</h2>
              <p className="text-blue-100 mb-8">
                Kami berkomitmen memberikan pelayanan bedah terbaik dengan standar medis tertinggi
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-white mb-2">Tim Ahli Bersertifikat</div>
                  <p className="text-xs text-blue-100">
                    Dokter spesialis bedah dengan pengalaman puluhan tahun
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-white mb-2">Teknologi Modern</div>
                  <p className="text-xs text-blue-100">
                    Peralatan bedah canggih dan teknik minimal invasif
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-white mb-2">Perawatan Komprehensif</div>
                  <p className="text-xs text-blue-100">
                    Dari konsultasi hingga rehabilitasi pasca operasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Butuh Konsultasi?</h2>
          <p className="text-gray-600 mb-8">
            Hubungi kami untuk konsultasi dan jadwal operasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+62123456789"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Hubungi Sekarang
            </a>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Jadwalkan Konsultasi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
