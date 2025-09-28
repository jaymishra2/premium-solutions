const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import models
const Product = require('./models/Product');
const News = require('./models/News');

// Sample products data
const sampleProducts = [
  {
    name: 'Stainless Steel Plate 304',
    category: 'stainless-steel',
    description: 'High-quality stainless steel plate with excellent corrosion resistance and durability. Perfect for construction, automotive, and industrial applications.',
    content: 'Our Grade 304 stainless steel plates offer superior corrosion resistance and excellent mechanical properties. These plates are widely used in various industries including construction, automotive, food processing, and chemical industries. Available in various thicknesses and sizes to meet your specific requirements.',
    specifications: ['Grade: 304', 'Thickness: 0.5-50mm', 'Width: 1000-2000mm', 'Length: 2000-6000mm'],
    features: ['Corrosion Resistant', 'High Strength', 'Easy to Weld', 'Food Grade'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.8,
    dimensions: {
      thickness: '0.5-50mm',
      width: '1000-2000mm',
      length: '2000-6000mm'
    },
    material: {
      grade: '304',
      composition: '18% Cr, 8% Ni',
      properties: ['Austenitic', 'Non-magnetic', 'Corrosion resistant']
    },
    applications: ['Construction', 'Automotive', 'Food Processing', 'Chemical Industry'],
    processing: {
      cutting: true,
      bending: true,
      welding: true,
      surfaceTreatment: true,
      custom: true
    },
    availability: {
      inStock: true,
      leadTime: '3-5 days',
      minimumOrder: '1 ton'
    },
    certifications: ['ISO 9001:2015', 'ASTM A240'],
    tags: ['stainless steel', '304', 'plate', 'corrosion resistant'],
    featured: true
  },
  {
    name: 'Carbon Steel Tube Q235',
    category: 'carbon-steel',
    description: 'Durable carbon steel tubes for structural applications. Widely used in construction, machinery, and infrastructure projects.',
    content: 'Q235 carbon steel tubes are known for their excellent mechanical properties and weldability. These tubes are commonly used in structural applications, machinery manufacturing, and infrastructure projects. We provide various sizes and wall thicknesses to meet different requirements.',
    specifications: ['Grade: Q235', 'Diameter: 10-500mm', 'Length: 6-12m', 'Wall Thickness: 1-20mm'],
    features: ['High Strength', 'Good Weldability', 'Cost Effective', 'Versatile'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.7,
    dimensions: {
      diameter: '10-500mm',
      length: '6-12m',
      thickness: '1-20mm'
    },
    material: {
      grade: 'Q235',
      composition: 'Low carbon steel',
      properties: ['High strength', 'Good weldability', 'Machinable']
    },
    applications: ['Construction', 'Machinery', 'Infrastructure', 'Automotive'],
    processing: {
      cutting: true,
      bending: true,
      welding: true,
      surfaceTreatment: true,
      custom: true
    },
    availability: {
      inStock: true,
      leadTime: '5-7 days',
      minimumOrder: '2 tons'
    },
    certifications: ['ISO 9001:2015', 'GB/T 3091'],
    tags: ['carbon steel', 'Q235', 'tube', 'structural'],
    featured: true
  },
  {
    name: 'Aluminum Sheet 1050',
    category: 'aluminum',
    description: 'Lightweight aluminum sheets with excellent formability and corrosion resistance. Ideal for automotive, aerospace, and packaging industries.',
    content: 'Grade 1050 aluminum sheets offer excellent formability, corrosion resistance, and electrical conductivity. These sheets are widely used in automotive, aerospace, packaging, and electrical industries. Available in various thicknesses and finishes.',
    specifications: ['Grade: 1050', 'Thickness: 0.2-6mm', 'Width: 1000-1500mm', 'Length: 2000-4000mm'],
    features: ['Lightweight', 'Corrosion Resistant', 'Good Formability', 'Recyclable'],
    price: 'Contact for Quote',
    inStock: true,
    rating: 4.9,
    dimensions: {
      thickness: '0.2-6mm',
      width: '1000-1500mm',
      length: '2000-4000mm'
    },
    material: {
      grade: '1050',
      composition: '99.5% Aluminum',
      properties: ['Pure aluminum', 'Excellent conductivity', 'Corrosion resistant']
    },
    applications: ['Automotive', 'Aerospace', 'Packaging', 'Electrical'],
    processing: {
      cutting: true,
      bending: true,
      welding: true,
      surfaceTreatment: true,
      custom: true
    },
    availability: {
      inStock: true,
      leadTime: '3-5 days',
      minimumOrder: '500kg'
    },
    certifications: ['ISO 9001:2015', 'ASTM B209'],
    tags: ['aluminum', '1050', 'sheet', 'lightweight'],
    featured: false
  }
];

// Sample news data
const sampleNews = [
  {
    title: 'New Stainless Steel Grade 316L Now Available',
    description: 'We are excited to announce the addition of Grade 316L stainless steel to our product line, offering superior corrosion resistance for demanding applications.',
    content: 'Premium Metal Products is proud to introduce Grade 316L stainless steel to our comprehensive product range. This high-quality material offers exceptional corrosion resistance, making it ideal for applications in harsh environments such as marine, chemical processing, and medical equipment manufacturing. Our 316L stainless steel maintains the same excellent mechanical properties as standard 316 grade while providing enhanced resistance to pitting and crevice corrosion. Available in various forms including plates, sheets, bars, and tubes, this addition strengthens our position as a leading supplier of premium stainless steel products.',
    category: 'Product Update',
    author: 'Technical Team',
    tags: ['Stainless Steel', '316L', 'New Product', 'Corrosion Resistance'],
    featured: true,
    published: true,
    status: 'published'
  },
  {
    title: 'Factory Expansion Completed - Increased Production Capacity',
    description: 'Our manufacturing facility expansion is now complete, increasing our production capacity by 40% to better serve our growing customer base.',
    content: 'After months of construction and installation, we are pleased to announce the completion of our factory expansion project. The new facility adds 15,000 square meters of manufacturing space and includes state-of-the-art equipment for cutting, bending, welding, and surface treatment. This expansion increases our production capacity by 40%, allowing us to serve more customers while maintaining our commitment to quality and timely delivery. The new facility also includes an expanded quality control laboratory with advanced testing equipment to ensure all products meet the highest standards.',
    category: 'Company News',
    author: 'Management Team',
    tags: ['Factory', 'Expansion', 'Production', 'Capacity'],
    featured: true,
    published: true,
    status: 'published'
  },
  {
    title: 'Quality Certification Renewed - ISO 9001:2015',
    description: 'We are proud to announce the successful renewal of our ISO 9001:2015 quality management system certification, reaffirming our commitment to excellence.',
    content: 'Premium Metal Products has successfully renewed its ISO 9001:2015 quality management system certification following a comprehensive audit by an independent certification body. This certification demonstrates our ongoing commitment to maintaining the highest standards in quality management, customer satisfaction, and continuous improvement. The audit covered all aspects of our operations, from raw material procurement to final product delivery, and confirmed our adherence to international quality standards. This certification provides our customers with confidence in our ability to consistently deliver high-quality products and services.',
    category: 'Certification',
    author: 'Quality Assurance Team',
    tags: ['ISO 9001', 'Certification', 'Quality', 'Standards'],
    featured: false,
    published: true,
    status: 'published'
  }
];

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/premium-metal';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await News.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${products.length} products`);

    // Insert sample news
    const news = await News.insertMany(sampleNews);
    console.log(`Inserted ${news.length} news articles`);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeder
seedDatabase();
