// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Plus,
//   Download,
//   Calculator,
//   User,
//   CheckCircle,
//   X,
//   FileText,
//   Loader2,
//   Sparkles,
//   ShieldCheck,
//   Zap,
//   ArrowRight,
//   Phone,
// } from "lucide-react";
// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable";

// const QuotationGenerator = () => {
//   const [items, setItems] = useState([
//     { description: "", quantity: 1, rate: 0 },
//   ]);

//   const [clientName, setClientName] = useState("");
//   const [clientMobile, setClientMobile] = useState("");
//   const [selectedGST, setSelectedGST] = useState(18);

//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//  const preDefinedServices = [
//  {
//     type: "Work From Home Setup",
//     services: [
//       { name: "Ergonomic Desk & Chair Assembly", rate: 1500 },
//       { name: "VPN & Secure Remote Access", rate: 3500 },
//       { name: "Dual-Monitor Configuration", rate: 800 },
//       { name: "Home Wi-Fi Range Extension", rate: 1200 },
//     ],
//   },
//   {
//     type: "Repair & Maintenance",
//     services: [
//       { name: "Laptop/Desktop Component Repair", rate: 2500 },
//       { name: "Motherboard Chip-level Repair", rate: 4500 },
//       { name: "RAM/SSD Upgrade Installation", rate: 1200 },
//       { name: "OS Troubleshooting & Debugging", rate: 1500 },
//     ],
//   },

//   {
//     type: "Networking Infrastructure",
//     services: [
//       { name: "Router & Access Point Sync", rate: 2500 },
//       { name: "Network Security Audit", rate: 10000 },
//       { name: "Switch & Patch Panel Dressing", rate: 5000 },
//       { name: "Fiber Optic Splicing (Per Core)", rate: 1500 },
//     ],
//   },
// ];
//   const subtotal = items.reduce(
//     (acc, item) => acc + item.quantity * item.rate,
//     0
//   );

//   const gst = subtotal * (selectedGST / 100);
//   const total = subtotal + gst;

//   const handleGenerate = async () => {
//     if (!clientName || subtotal === 0) return;

//     setIsGenerating(true);

//     try {
//       // 1. Create PDF Instance
//       const doc = new jsPDF();

//       // Branding Header
//       doc.setFontSize(22);
//       doc.setTextColor(124, 58, 237); // PURPLE
//       doc.text("SOFTLINK SOLUTIONS", 14, 22);

//       doc.setFontSize(10);
//       doc.setTextColor(100);
//       doc.text("IT Infrastructure & Maintenance Experts", 14, 30);
//       doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 22);
//       doc.text(
//         `Quote No: QTN-${Math.floor(Math.random() * 10000)}`,
//         160,
//         28
//       );

//       doc.setFontSize(12);
//       doc.setTextColor(0);
//       doc.text("QUOTATION FOR:", 14, 45);

//       doc.setFont("helvetica", "bold");
//       doc.text(clientName.toUpperCase(), 14, 52);

//       doc.setFont("helvetica", "normal");
//       doc.text(`Mobile: ${clientMobile}`, 14, 59);

//       const tableData = items.map((item) => [
//         item.description,
//         item.quantity.toString(),
//         `INR ${item.rate.toLocaleString()}`,
//         `INR ${(item.quantity * item.rate).toLocaleString()}`,
//       ]);

//       autoTable(doc, {
//         startY: 68,
//         head: [["Description", "Qty", "Rate", "Amount"]],
//         body: tableData,
//         headStyles: { fillColor: [124, 58, 237] },
//         theme: "striped",
//       });

//       const finalY = (doc as any).lastAutoTable.finalY + 10;

//       doc.setFontSize(10);
//       doc.setFont("helvetica", "normal");

//       doc.text(
//         `Subtotal: INR ${subtotal.toLocaleString()}`,
//         140,
//         finalY
//       );

//       doc.text(
//         `GST (${selectedGST}%): INR ${gst.toLocaleString()}`,
//         140,
//         finalY + 7
//       );

//       doc.setFontSize(12);
//       doc.setFont("helvetica", "bold");
//       doc.setTextColor(124, 58, 237);

//       doc.text(
//         `Total: INR ${total.toLocaleString()}`,
//         140,
//         finalY + 15
//       );

//       // 2. Local Download for User
//       doc.save(`Quotation_${clientName.replace(/\s+/g, "_")}.pdf`);

//       // 3. Prepare for Admin Email
//       const pdfBase64 = doc.output("datauristring").split(",")[1];

//       // 4. Submit to API Route
//       const response = await fetch("/api/project-request", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },

//         body: JSON.stringify({
//           clientName,
//           clientMobile,
//           totalAmount: total.toLocaleString(),
//           pdfBase64: pdfBase64,
//         }),
//       });

//       if (response.ok) {
//         setShowSuccess(true);
//         setTimeout(() => setShowSuccess(false), 4000);
//       } else {
//         throw new Error("Admin sync failed");
//       }
//     } catch (err) {
//       console.error("Workflow Error:", err);
//       alert("Quotation downloaded, but admin notification failed.");
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const addItem = () =>
//     setItems([...items, { description: "", quantity: 1, rate: 0 }]);

//   const removeItem = (index: number) => {
//     const newItems = items.filter((_, i) => i !== index);

//     setItems(
//       newItems.length
//         ? newItems
//         : [{ description: "", quantity: 1, rate: 0 }]
//     );
//   };

//   const updateItem = (index: number, field: string, value: any) => {
//     const newItems = [...items];

//     newItems[index] = {
//       ...newItems[index],
//       [field]: value,
//     };

//     setItems(newItems);
//   };

//   const addQuickService = (service: {
//     name: string;
//     rate: number;
//   }) => {
//     if (
//       items.length === 1 &&
//       items[0].description === "" &&
//       items[0].rate === 0
//     ) {
//       setItems([
//         {
//           description: service.name,
//           quantity: 1,
//           rate: service.rate,
//         },
//       ]);
//     } else {
//       setItems([
//         ...items,
//         {
//           description: service.name,
//           quantity: 1,
//           rate: service.rate,
//         },
//       ]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-[#1a102f] pt-32 pb-20 transition-colors duration-500 overflow-x-hidden font-sans">
//       <div className="container mx-auto px-6">
//         {/* Hero Section */}
//         <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="lg:w-3/5"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-purple-200">
//               <Sparkles size={14} className="animate-pulse" />
//               Self-Service Portal
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black text-[#2d1457] dark:text-white leading-[0.95] tracking-tighter mb-8">
//               Instant <span className="text-purple-600">Quotes.</span>{" "}
//               <br />
//               <span className="text-purple-300 dark:text-purple-400">
//                 Zero Wait Time.
//               </span>
//             </h1>

//             <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
//               Build your customized IT service package in seconds.
//               Enter your requirements below and download a professional
//               PDF quotation immediately.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
//                 <ShieldCheck
//                   size={18}
//                   className="text-purple-600"
//                 />
//                 GST Compliant
//               </div>

//               <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
//                 <Zap size={18} className="text-purple-600" />
//                 Admin Notified
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="lg:w-2/5 w-full bg-purple-50 dark:bg-[#2a1847] p-8 rounded-[3rem] border border-purple-100 dark:border-white/5 text-center"
//           >
//             <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-purple-500/20">
//               <Calculator size={32} />
//             </div>

//             <h3 className="text-2xl font-black dark:text-white mb-2 tracking-tight">
//               Current Estimate
//             </h3>

//             <div className="text-4xl font-black text-purple-600">
//               ₹{total.toLocaleString()}
//             </div>

//             <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">
//               Inc. GST
//             </p>
//           </motion.div>
//         </div>

//         {/* Builder Interface */}
//         <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
//           <h2 className="text-3xl font-black text-[#2d1457] dark:text-white flex items-center gap-3">
//             <div className="p-2 bg-purple-600 rounded-lg text-white">
//               <FileText size={24} />
//             </div>

//             Quotation Builder
//           </h2>

//           <button
//             onClick={handleGenerate}
//             disabled={!clientName || subtotal === 0 || isGenerating}
//             className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-bold shadow-xl shadow-purple-500/20 disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-purple-700 transition-all group"
//           >
//             {isGenerating ? (
//               <Loader2 className="animate-spin" />
//             ) : (
//               <Download size={20} />
//             )}

//             {isGenerating ? "Processing..." : "Generate PDF"}

//             <ArrowRight
//               size={18}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </button>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             {/* CLIENT INFO */}
//             <section className="bg-white dark:bg-[#2a1847] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm">
//               <h3 className="text-sm font-black uppercase tracking-widest text-purple-600 mb-6 flex items-center gap-2">
//                 <User size={16} />
//                 Client Information
//               </h3>

//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Company or Client Name..."
//                   value={clientName}
//                   onChange={(e) => setClientName(e.target.value)}
//                   className="w-full bg-slate-50 dark:bg-[#1a102f] border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-lg dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
//                 />

//                 {/* MOBILE FIELD */}
//                 <div className="relative">
//                   <Phone
//                     size={18}
//                     className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-500"
//                   />

//                   <input
//                     type="tel"
//                     placeholder="Enter Mobile Number..."
//                     value={clientMobile}
//                     onChange={(e) =>
//                       setClientMobile(e.target.value)
//                     }
//                     className="w-full pl-14 bg-slate-50 dark:bg-[#1a102f] border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-lg dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
//                   />
//                 </div>

//                 {/* GST DROPDOWN */}
//                 <select
//                   value={selectedGST}
//                   onChange={(e) =>
//                     setSelectedGST(Number(e.target.value))
//                   }
//                   className="w-full bg-slate-50 dark:bg-[#1a102f] border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-lg dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
//                 >
//                   <option value={0}>No GST</option>
//                   <option value={5}>GST 5%</option>
//                   <option value={12}>GST 12%</option>
//                   <option value={18}>GST 18%</option>
//                   <option value={28}>GST 28%</option>
//                 </select>
//               </div>
//             </section>

//             {/* LINE ITEMS */}
//             <section className="bg-white dark:bg-[#2a1847] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm">
//               <div className="flex justify-between items-center mb-8">
//                 <h3 className="text-sm font-black uppercase tracking-widest text-purple-600 flex items-center gap-2">
//                   <Plus size={16} />
//                   Line Items
//                 </h3>

//                 <button
//                   onClick={addItem}
//                   className="flex items-center gap-2 text-xs font-black bg-purple-100 text-purple-700 px-4 py-2 rounded-xl hover:bg-purple-200 transition-all"
//                 >
//                   <Plus size={14} />
//                   Add Row
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <AnimatePresence>
//                   {items.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       className="flex flex-col md:flex-row gap-3 p-4 bg-purple-50 dark:bg-[#1a102f] rounded-2xl border border-transparent hover:border-purple-400/30 transition-all"
//                     >
//                       <input
//                         className="flex-[3] bg-transparent border-none px-2 py-1 dark:text-white outline-none font-medium"
//                         placeholder="Service Description"
//                         value={item.description}
//                         onChange={(e) =>
//                           updateItem(
//                             index,
//                             "description",
//                             e.target.value
//                           )
//                         }
//                       />

//                       <div className="flex flex-1 gap-2">
//                         <input
//                           type="number"
//                           className="w-full bg-white dark:bg-[#2a1847] rounded-xl px-3 py-2 text-center dark:text-white outline-none border border-transparent focus:border-purple-600"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             updateItem(
//                               index,
//                               "quantity",
//                               parseInt(e.target.value) || 0
//                             )
//                           }
//                         />

//                         <input
//                           type="number"
//                           className="w-full bg-white dark:bg-[#2a1847] rounded-xl px-3 py-2 text-right dark:text-white outline-none border border-transparent focus:border-purple-600"
//                           value={item.rate}
//                           onChange={(e) =>
//                             updateItem(
//                               index,
//                               "rate",
//                               parseInt(e.target.value) || 0
//                             )
//                           }
//                         />

//                         <button
//                           onClick={() => removeItem(index)}
//                           className="p-2 text-slate-400 hover:text-red-500"
//                         >
//                           <X size={20} />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </section>
//           </div>

//           {/* SIDEBAR */}
//           <aside className="space-y-6">
//             <div className="bg-white dark:bg-[#2a1847] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl sticky top-32">
//               <h3 className="text-xl font-black dark:text-white mb-6">
//                 Summary
//               </h3>

//               <div className="space-y-4 text-sm mb-10">
//                 <div className="flex justify-between text-slate-500">
//                   <span>Subtotal</span>

//                   <span className="font-bold dark:text-white">
//                     ₹{subtotal.toLocaleString()}
//                   </span>
//                 </div>

//                 <div className="flex justify-between text-slate-500">
//                   <span>GST ({selectedGST}%)</span>

//                   <span className="font-bold text-purple-600">
//                     +₹{gst.toLocaleString()}
//                   </span>
//                 </div>

//                 <div className="h-px bg-slate-100 dark:bg-white/10 my-4" />

//                 <div className="flex justify-between items-end">
//                   <span className="font-black dark:text-white">
//                     Total Amount
//                   </span>

//                   <span className="text-3xl font-black text-purple-600">
//                     ₹{total.toLocaleString()}
//                   </span>
//                 </div>
//               </div>

//               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
//   Quick Add Services
// </h4>

// <div className="space-y-4">
//   {preDefinedServices.map((category, index) => (
//     <div key={index}>
//       <select
//         className="w-full bg-white dark:bg-[#1a102f] border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-4 text-sm font-bold dark:text-white outline-none focus:border-purple-600"
//         defaultValue=""
//         onChange={(e) => {
//           const selectedService = category.services.find(
//             (s) => s.name === e.target.value
//           );

//           if (selectedService) {
//             addQuickService(selectedService);
//           }
//         }}
//       >
//         <option value="">
//           Select {category.type}
//         </option>

//         {category.services.map((service, i) => (
//           <option key={i} value={service.name}>
//             {service.name} - ₹{service.rate.toLocaleString()}
//           </option>
//         ))}
//       </select>
//     </div>
//   ))}
// </div>
//             </div>
//           </aside>
//         </div>
//       </div>

//       {/* SUCCESS MODAL */}
//       <AnimatePresence>
//         {showSuccess && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               className="bg-white dark:bg-[#1a102f] p-8 rounded-[3rem] text-center max-w-sm w-full shadow-2xl border border-white/10"
//             >
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/30">
//                 <CheckCircle size={40} />
//               </div>

//               <h2 className="text-2xl font-black dark:text-white mb-2">
//                 Quotation Ready!
//               </h2>

//               <p className="text-slate-500 text-sm mb-6">
//                 A copy has been downloaded and the admin has been
//                 notified via email.
//               </p>

//               <button
//                 onClick={() => setShowSuccess(false)}
//                 className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold"
//               >
//                 Done
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default QuotationGenerator;


// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Download,
//   User,
//   CheckCircle,
//   Loader2,
//   Zap,
//   Layers,
//   Trash2,
// } from "lucide-react";

// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable";

// const QuotationGenerator = () => {
//   // ---------------- STATE ----------------
//   const [items, setItems] = useState<any[]>([
//     {
//       title: "",
//       subtitle: "",
//       description: "",
//       quantity: 1,
//       rate: 0,
//       gstRate: 18,
//     },
//   ]);

//   const [clientName, setClientName] = useState("");
//   const [clientMobile, setClientMobile] = useState("");

//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const [warning, setWarning] = useState("");
//   const [selectedServices, setSelectedServices] = useState<string[]>([]);

//   // ---------------- SERVICES ----------------
//   const preDefinedServices = [
//     {
//       category: "Work From Home Setup",
//       services: [
//         {
//           title: "Work From Home Setup",
//           subtitle: "Ergonomic Desk & Chair Assembly",
//           rate: 1500,
//         },
//         {
//           title: "Work From Home Setup",
//           subtitle: "VPN & Secure Remote Access",
//           rate: 3500,
//         },
//       ],
//     },

//     {
//       category: "Repair & Maintenance",
//       services: [
//         {
//           title: "Repair & Maintenance",
//           subtitle: "Laptop/Desktop Component Repair",
//           rate: 2500,
//         },
//         {
//           title: "Repair & Maintenance",
//           subtitle: "Motherboard Chip-level Repair",
//           rate: 4500,
//         },
//       ],
//     },
//   ];

//   // ---------------- HELPERS ----------------
//   const calculateItemTotal = (item: any) => {
//     const qty = Number(item.quantity) || 0;
//     const rate = Number(item.rate) || 0;
//     const gst = Number(item.gstRate) || 0;

//     const subtotal = qty * rate;
//     const gstAmount = subtotal * (gst / 100);

//     return subtotal + gstAmount;
//   };

//   const grandTotal = items.reduce(
//     (acc: number, item: any) => acc + calculateItemTotal(item),
//     0
//   );

//   // ---------------- UPDATE ITEM ----------------
//   const updateItem = (
//     index: number,
//     field: string,
//     value: string
//   ) => {
//     const newItems = [...items];

//     if (newItems[index]) {
//       const isNumeric = [
//         "quantity",
//         "rate",
//         "gstRate",
//       ].includes(field);

//       const sanitizedValue = isNumeric
//         ? value === ""
//           ? 0
//           : parseFloat(value)
//         : value;

//       newItems[index] = {
//         ...newItems[index],
//         [field]: sanitizedValue,
//       };

//       setItems(newItems);
//     }
//   };

//   // ---------------- MULTI SELECT ----------------
//   const toggleService = (service: any) => {
//     const uniqueName = `${service.title} - ${service.subtitle}`;

//     const alreadySelected =
//       selectedServices.includes(uniqueName);

//     if (alreadySelected) {
//       setSelectedServices(
//         selectedServices.filter(
//           (name) => name !== uniqueName
//         )
//       );

//       setItems(
//         items.filter(
//           (item) =>
//             item.description !== uniqueName
//         )
//       );
//     } else {
//       setSelectedServices([
//         ...selectedServices,
//         uniqueName,
//       ]);

//       const newItem = {
//         title: service.title,
//         subtitle: service.subtitle,
//         description: uniqueName,
//         quantity: 1,
//         rate: service.rate,
//         gstRate: 18,
//       };

//       if (
//         items.length === 1 &&
//         items[0].description === ""
//       ) {
//         setItems([newItem]);
//       } else {
//         setItems([...items, newItem]);
//       }
//     }
//   };

//   // ---------------- PDF ----------------
//   const handleGenerate = async () => {
//     // CLIENT VALIDATION
//     if (!clientName.trim()) {
//       setWarning("Please enter client name");
//       return;
//     }

//     // ITEM VALIDATION
//     const invalidItem = items.find(
//       (item) =>
//         !item.title?.trim() ||
//         !item.subtitle?.trim() ||
//         item.quantity <= 0 ||
//         item.rate <= 0
//     );

//     if (invalidItem) {
//       setWarning(
//         "Please fill all blank fields before generating PDF"
//       );
//       return;
//     }

//     setWarning("");
//     setIsGenerating(true);

//     try {
//       const doc = new jsPDF();

//       // HEADER
//       doc.setFontSize(20);
//       doc.setTextColor(124, 58, 237);
//       doc.text("SOFTLINK SOLUTIONS", 14, 20);

//       doc.setFontSize(10);
//       doc.setTextColor(100);

//       doc.text(`Client: ${clientName}`, 14, 35);

//       doc.text(`Mobile: ${clientMobile}`, 14, 42);

//       doc.text(
//         `Date: ${new Date().toLocaleDateString()}`,
//         150,
//         35
//       );

//       // TABLE DATA
//       const tableData = items.map((item) => {
//         const sub = item.quantity * item.rate;

//         const gstAmt =
//           sub * (item.gstRate / 100);

//         return [
//           `${item.title}\n${item.subtitle}`,
//           item.quantity,
//           `INR ${item.rate}`,
//           `${item.gstRate}%`,
//           `INR ${(sub + gstAmt).toLocaleString()}`,
//         ];
//       });

//       autoTable(doc, {
//         startY: 50,

//         head: [
//           [
//             "Service Description",
//             "Qty",
//             "Rate",
//             "GST",
//             "Total",
//           ],
//         ],

//         body: tableData,

//         headStyles: {
//           fillColor: [124, 58, 237],
//         },

//         styles: {
//           fontSize: 10,
//           cellPadding: 4,
//         },
//       });

//       const finalY = (doc as any).lastAutoTable
//         ? (doc as any).lastAutoTable.finalY
//         : 150;

//       // GRAND TOTAL
//       doc.setFontSize(14);

//       doc.setFont("helvetica", "bold");

//       doc.text(
//         `Grand Total: INR ${grandTotal.toLocaleString()}`,
//         140,
//         finalY + 20
//       );

//       // SAVE PDF
//       doc.save(
//         `Quotation_${clientName.replace(
//           /\s+/g,
//           "_"
//         )}.pdf`
//       );

//       setShowSuccess(true);

//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 3000);
//     } catch (err) {
//       console.error("PDF Error:", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-[#0b0616] py-12 px-6 font-sans -top-6">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
//         <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
//            <motion.div
//              initial={{ opacity: 0, x: -50 }}
//              animate={{ opacity: 1, x: 0 }}
//             className="lg:w-3/5"
//            >
//              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-purple-200">
//                <Sparkles size={14} className="animate-pulse" />
//                Self-Service Portal
//              </div>

//              <h1 className="text-5xl md:text-7xl font-black text-[#2d1457] dark:text-white leading-[0.95] tracking-tighter mb-8">
//                Instant <span className="text-purple-600">Quotes.</span>{" "}
//                <br />
//               <span className="text-purple-300 dark:text-purple-400">
//                 Zero Wait Time.
//               </span>
//             </h1>

//              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
//                Build your customized IT service package in seconds.
//                Enter your requirements below and download a professional
//                PDF quotation immediately.
//              </p>

//              <div className="flex flex-wrap gap-4">
//                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
//                 <ShieldCheck
//                   size={18}
//                   className="text-purple-600"                 />
//                 GST Compliant
//         </div>

//              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
//                  <Zap size={18} className="text-purple-600" />
//                  Admin Notified              </div>
//              </div>
//            </motion.div>

//           <motion.div
//              initial={{ opacity: 0, scale: 0.9 }}
//              animate={{ opacity: 1, scale: 1 }}
//              className="lg:w-2/5 w-full bg-purple-50 dark:bg-[#2a1847] p-8 rounded-[3rem] border border-purple-100 dark:border-white/5 text-center"
//           >
//             <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-purple-500/20">
//               <Calculator size={32} />
//             </div>

//              <h3 className="text-2xl font-black dark:text-white mb-2 tracking-tight">
//                Current Estimate
//              </h3>

//             <div className="text-4xl font-black text-purple-600">
//               ₹{total.toLocaleString()}
//            </div>

//              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">
//                Inc. GST
//              </p>
//            </motion.div>
//          </div>

//        {/* Builder Interface */}
//         <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
//            <h2 className="text-3xl font-black text-[#2d1457] dark:text-white flex items-center gap-3">
//              <div className="p-2 bg-purple-600 rounded-lg text-white">
//                <FileText size={24} />
//              </div>

//              Quotation Builder
//            </h2>

//            <button             onClick={handleGenerate}
//             disabled={!clientName || subtotal === 0 || isGenerating}
//             className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-bold shadow-xl shadow-purple-500/20 disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-purple-700 transition-all group"/           >
//              {isGenerating ? (
//                <Loader2 className="animate-spin" />
//              ) : (               <Download size={20} /             )}

//              {isGenerating ? "Processing..." : "Generate PDF"}

//             <ArrowRight
//               size={18}
//                className="group-hover:translate-x-1 transition-transform"
//              />
//            </button>
//          </div>
//         {/* LEFT SIDE */}
//         <div className="lg:col-span-8 space-y-6">
//           <div className="bg-white dark:bg-[#160e26] p-8 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
//             <h2 className="text-2xl font-black mb-6 dark:text-white flex items-center gap-2">
//               <Layers className="text-purple-500" />
//               Quotation Builder
//             </h2>

//             <div className="space-y-6">
//               {items.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="p-6 bg-slate-50 dark:bg-[#0b0616] rounded-2xl border border-transparent hover:border-purple-500/30 transition-all"
//                 >
//                   {/* TITLE */}
//                   <div className="flex justify-between items-start gap-4 mb-2">
//                     <input
//                       className="text-lg font-bold bg-transparent dark:text-white outline-none w-full border-b border-slate-200 dark:border-white/10 focus:border-purple-500"
//                       placeholder="Main Title"
//                       value={
//                         item.title
//                           ? item.title
//                           : item.description
//                       }
//                       onChange={(e) =>
//                         updateItem(
//                           idx,
//                           "title",
//                           e.target.value
//                         )
//                       }
//                     />

//                     <button
//                       onClick={() =>
//                         setItems(
//                           items.filter(
//                             (_: any, i: number) =>
//                               i !== idx
//                           )
//                         )
//                       }
//                       className="text-slate-400 hover:text-red-500"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>

//                   {/* SUBTITLE */}
//                   <input
//                     className="w-full mb-4 text-sm bg-transparent dark:text-slate-300 outline-none border-b border-slate-200 dark:border-white/10 focus:border-purple-500 pb-2"
//                     placeholder="Subtitle"
//                     value={item.subtitle}
//                     onChange={(e) =>
//                       updateItem(
//                         idx,
//                         "subtitle",
//                         e.target.value
//                       )
//                     }
//                   />

//                   {/* FIELDS */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {/* QTY */}
//                     <div>
//                       <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
//                         Qty
//                       </label>

//                       <input
//                         type="number"
//                         className="w-full bg-white dark:bg-[#160e26] p-2 rounded-lg dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                         value={item.quantity}
//                         onChange={(e) =>
//                           updateItem(
//                             idx,
//                             "quantity",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     {/* RATE */}
//                     <div>
//                       <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
//                         Rate
//                       </label>

//                       <input
//                         type="number"
//                         className="w-full bg-white dark:bg-[#160e26] p-2 rounded-lg dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                         value={item.rate}
//                         onChange={(e) =>
//                           updateItem(
//                             idx,
//                             "rate",
//                             e.target.value
//                           )
//                         }
//                       />
//                     </div>

//                     {/* GST */}
//                     <div>
//                       <label className="text-[10px] uppercase font-black text-purple-400 block mb-1">
//                         GST %
//                       </label>

//                       <select
//                         className="w-full bg-white dark:bg-[#160e26] p-2 rounded-lg dark:text-white outline-none border border-purple-500/30"
//                         value={item.gstRate}
//                         onChange={(e) =>
//                           updateItem(
//                             idx,
//                             "gstRate",
//                             e.target.value
//                           )
//                         }
//                       >
//                         {[0, 5, 12, 18, 28].map(
//                           (v) => (
//                             <option
//                               key={v}
//                               value={v}
//                             >
//                               {v}% GST
//                             </option>
//                           )
//                         )}
//                       </select>
//                     </div>

//                     {/* TOTAL */}
//                     <div className="text-right">
//                       <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
//                         Total
//                       </label>

//                       <div className="text-lg font-black dark:text-white text-purple-500">
//                         ₹
//                         {calculateItemTotal(
//                           item
//                         ).toLocaleString()}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ADD NEW ITEM */}
//             <button
//               onClick={() =>
//                 setItems([
//                   ...items,
//                   {
//                     title: "",
//                     subtitle: "",
//                     description: "",
//                     quantity: 1,
//                     rate: 0,
//                     gstRate: 18,
//                   },
//                 ])
//               }
//               className="mt-6 w-full py-4 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400 font-bold hover:border-purple-500 hover:text-purple-500 transition-all"
//             >
//               + Add New Custom Item
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="lg:col-span-4 space-y-6">
//           {/* CLIENT */}
//           <div className="bg-white dark:bg-[#160e26] p-6 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
//             <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
//               <User size={18} />
//               Client Details
//             </h3>

//             <div className="space-y-3">
//               <input
//                 className="w-full bg-slate-50 dark:bg-[#0b0616] p-3 rounded-xl dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                 placeholder="Name"
//                 value={clientName}
//                 onChange={(e) =>
//                   setClientName(e.target.value)
//                 }
//               />

//               <input
//                 className="w-full bg-slate-50 dark:bg-[#0b0616] p-3 rounded-xl dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                 placeholder="Mobile"
//                 value={clientMobile}
//                 onChange={(e) =>
//                   setClientMobile(e.target.value)
//                 }
//               />
//             </div>
//           </div>

//           {/* CATALOG */}
//           <div className="bg-white dark:bg-[#160e26] p-6 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
//             <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
//               <Zap size={18} />
//               Catalog
//             </h3>

//             <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
//               {preDefinedServices.map(
//                 (group, i) => (
//                   <div key={i}>
//                     <p className="text-[10px] uppercase font-black text-purple-500 mb-2">
//                       {group.category}
//                     </p>

//                     <div className="grid gap-2">
//                       {group.services.map(
//                         (s, si) => (
//                           <label
//                             key={si}
//                             className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all text-xs font-bold border
//                           ${
//                             selectedServices.includes(
//                               `${s.title} - ${s.subtitle}`
//                             )
//                               ? "bg-purple-600 text-white border-purple-600"
//                               : "bg-slate-50 dark:bg-[#0b0616] dark:text-slate-300 border-slate-200 dark:border-white/10"
//                           }`}
//                           >
//                             <input
//                               type="checkbox"
//                               checked={selectedServices.includes(
//                                 `${s.title} - ${s.subtitle}`
//                               )}
//                               onChange={() =>
//                                 toggleService(s)
//                               }
//                               className="accent-purple-600 w-4 h-4"
//                             />

//                             <div>
//                               <p className="text-sm font-black">
//                                 {s.subtitle}
//                               </p>
//                             </div>
//                           </label>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* TOTAL */}
//           <div className="bg-purple-600 p-8 rounded-[2rem] shadow-xl text-white">
//             <p className="text-xs uppercase font-black opacity-70 tracking-widest">
//               Grand Total
//             </p>

//             <div className="text-4xl font-black mb-6">
//               ₹{grandTotal.toLocaleString()}
//             </div>

//             {/* WARNING */}
//             {warning && (
//               <div className="mb-4 bg-red-500/10 border border-red-500/30 text-white p-3 rounded-xl text-sm font-bold">
//                 {warning}
//               </div>
//             )}

//             {/* BUTTON */}
//             <button
//               onClick={handleGenerate}
//               disabled={isGenerating}
//               className="w-full bg-white text-purple-600 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-100 disabled:opacity-50 transition-all shadow-xl"
//             >
//               {isGenerating ? (
//                 <Loader2 className="animate-spin" />
//               ) : (
//                 <Download size={20} />
//               )}

//               Generate PDF
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* SUCCESS */}
//       <AnimatePresence>
//         {showSuccess && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
//           >
//             <div className="bg-white dark:bg-[#160e26] p-10 rounded-[3rem] text-center max-w-sm w-full">
//               <CheckCircle
//                 size={60}
//                 className="text-green-500 mx-auto mb-4"
//               />

//               <h2 className="text-2xl font-black dark:text-white">
//                 Success!
//               </h2>

//               <p className="text-slate-500 mt-2 mb-6">
//                 The quotation has been downloaded.
//               </p>

//               <button
//                 onClick={() =>
//                   setShowSuccess(false)
//                 }
//                 className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold"
//               >
//                 Done
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default QuotationGenerator;


// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Download,
//   User,
//   CheckCircle,
//   Loader2,
//   Zap,
//   Layers,
//   Trash2,
//   Sparkles,
//   ShieldCheck,
//   Calculator,
//   FileText,
//   ArrowRight,
// } from "lucide-react";

// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable";

// const QuotationGenerator = () => {
//   // ---------------- STATE ----------------
//   const [items, setItems] = useState<any[]>([
//     {
//       title: "",
//       subtitle: "",
//       description: "",
//       quantity: 1,
//       rate: 0,
//       gstRate: 18,
//     },
//   ]);

//   const [clientName, setClientName] = useState("");
//   const [clientMobile, setClientMobile] = useState("");

//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const [warning, setWarning] = useState("");
//   const [selectedServices, setSelectedServices] = useState<string[]>([]);

//   // ---------------- SERVICES ----------------
//   const preDefinedServices = [
//     {
//       category: "Work From Home Setup",
//       services: [
//         {
//           title: "Work From Home Setup",
//           subtitle: "Ergonomic Desk & Chair Assembly",
//           rate: 1500,
//         },
//         {
//           title: "Work From Home Setup",
//           subtitle: "VPN & Secure Remote Access",
//           rate: 3500,
//         },
//       ],
//     },

//     {
//       category: "Repair & Maintenance",
//       services: [
//         {
//           title: "Repair & Maintenance",
//           subtitle: "Laptop/Desktop Component Repair",
//           rate: 2500,
//         },
//         {
//           title: "Repair & Maintenance",
//           subtitle: "Motherboard Chip-level Repair",
//           rate: 4500,
//         },
//       ],
//     },
//   ];

//   // ---------------- HELPERS ----------------
//   const calculateItemTotal = (item: any) => {
//     const qty = Number(item.quantity) || 0;
//     const rate = Number(item.rate) || 0;
//     const gst = Number(item.gstRate) || 0;

//     const subtotal = qty * rate;
//     const gstAmount = subtotal * (gst / 100);

//     return subtotal + gstAmount;
//   };

//   const grandTotal = items.reduce(
//     (acc: number, item: any) => acc + calculateItemTotal(item),
//     0
//   );

//   const subtotal = grandTotal;
//   const total = grandTotal;

//   // ---------------- UPDATE ITEM ----------------
//   const updateItem = (
//     index: number,
//     field: string,
//     value: string
//   ) => {
//     const newItems = [...items];

//     if (newItems[index]) {
//       const isNumeric = [
//         "quantity",
//         "rate",
//         "gstRate",
//       ].includes(field);

//       const sanitizedValue = isNumeric
//         ? value === ""
//           ? 0
//           : parseFloat(value)
//         : value;

//       newItems[index] = {
//         ...newItems[index],
//         [field]: sanitizedValue,
//       };

//       setItems(newItems);
//     }
//   };

//   // ---------------- MULTI SELECT ----------------
//   const toggleService = (service: any) => {
//     const uniqueName = `${service.title} - ${service.subtitle}`;

//     const alreadySelected =
//       selectedServices.includes(uniqueName);

//     if (alreadySelected) {
//       setSelectedServices(
//         selectedServices.filter(
//           (name) => name !== uniqueName
//         )
//       );

//       setItems(
//         items.filter(
//           (item) =>
//             item.description !== uniqueName
//         )
//       );
//     } else {
//       setSelectedServices([
//         ...selectedServices,
//         uniqueName,
//       ]);

//       const newItem = {
//         title: service.title,
//         subtitle: service.subtitle,
//         description: uniqueName,
//         quantity: 1,
//         rate: service.rate,
//         gstRate: 18,
//       };

//       if (
//         items.length === 1 &&
//         items[0].description === ""
//       ) {
//         setItems([newItem]);
//       } else {
//         setItems([...items, newItem]);
//       }
//     }
//   };

//   // ---------------- PDF ----------------
//   const handleGenerate = async () => {
//     if (!clientName.trim()) {
//       setWarning("Please enter client name");
//       return;
//     }

//     const invalidItem = items.find(
//       (item) =>
//         !item.title?.trim() ||
//         !item.subtitle?.trim() ||
//         item.quantity <= 0 ||
//         item.rate <= 0
//     );

//     if (invalidItem) {
//       setWarning(
//         "Please fill all blank fields before generating PDF"
//       );
//       return;
//     }

//     setWarning("");
//     setIsGenerating(true);

//     try {
//       const doc = new jsPDF();

//       // HEADER - Electric Blue
//       doc.setFontSize(20);
//       doc.setTextColor(37, 99, 235);
//       doc.text("SOFTLINK SOLUTIONS", 14, 20);

//       doc.setFontSize(10);
//       doc.setTextColor(100);

//       doc.text(`Client: ${clientName}`, 14, 35);
//       doc.text(`Mobile: ${clientMobile}`, 14, 42);
//       doc.text(
//         `Date: ${new Date().toLocaleDateString()}`,
//         150,
//         35
//       );

//       const tableData = items.map((item) => {
//         const sub = item.quantity * item.rate;
//         const gstAmt = sub * (item.gstRate / 100);

//         return [
//           `${item.title}\n${item.subtitle}`,
//           item.quantity,
//           `INR ${item.rate}`,
//           `${item.gstRate}%`,
//           `INR ${(sub + gstAmt).toLocaleString()}`,
//         ];
//       });

//       autoTable(doc, {
//         startY: 50,
//         head: [
//           [
//             "Service Description",
//             "Qty",
//             "Rate",
//             "GST",
//             "Total",
//           ],
//         ],
//         body: tableData,
//         headStyles: {
//           fillColor: [37, 99, 235],
//         },
//         styles: {
//           fontSize: 10,
//           cellPadding: 4,
//         },
//       });

//       const finalY = (doc as any).lastAutoTable
//         ? (doc as any).lastAutoTable.finalY
//         : 150;

//       doc.setFontSize(14);
//       doc.setFont("helvetica", "bold");
//       doc.text(
//         `Grand Total: INR ${grandTotal.toLocaleString()}`,
//         140,
//         finalY + 20
//       );

//       doc.save(
//         `Quotation_${clientName.replace(/\s+/g, "_")}.pdf`
//       );

//       setShowSuccess(true);
//       setTimeout(() => setShowSuccess(false), 3000);
//     } catch (err) {
//       console.error("PDF Error:", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleGenerate();
//       }}
//     >
//       <div className="min-h-screen bg-slate-50 dark:bg-[#060b16] py-12 px-6 font-sans">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
//           <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 lg:col-span-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="lg:w-3/5"
//             >
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-200">
//                 <Sparkles size={14} className="animate-pulse" />
//                 Self-Service Portal
//               </div>

//               <h1 className="text-5xl md:text-7xl font-black text-[#142157] dark:text-white leading-[0.95] tracking-tighter mb-8">
//                 Instant <span className="text-blue-600">Quotes.</span>{" "}
//                 <br />
//                 <span className="text-sky-400 dark:text-sky-400">
//                   Zero Wait Time.
//                 </span>
//               </h1>

//               <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
//                 Build your customized IT service package in seconds.
//                 Enter your requirements below and download a professional
//                 PDF quotation immediately.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
//                   <ShieldCheck size={18} className="text-blue-600" />
//                   GST Compliant
//                 </div>

//                 <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
//                   <Zap size={18} className="text-blue-600" />
//                   Admin Notified
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="lg:w-2/5 w-full bg-blue-50 dark:bg-[#182a47] p-8 rounded-[3rem] border border-blue-100 dark:border-white/5 text-center"
//             >
//               <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-500/20">
//                 <Calculator size={32} />
//               </div>

//               <h3 className="text-2xl font-black dark:text-white mb-2 tracking-tight">
//                 Current Estimate
//               </h3>

//               <div className="text-4xl font-black text-blue-600">
//                 ₹{total.toLocaleString()}
//               </div>

//               <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">
//                 Inc. GST
//               </p>
//             </motion.div>
//           </div>

//           {/* Builder Interface */}
//           <div className="flex flex-col md:flex-row justify-between mb-10 gap-6 lg:col-span-12">
//             <h2 className="text-3xl font-black text-[#142157] dark:text-white flex items-center gap-3">
//               <div className="p-2 bg-blue-600 rounded-lg text-white">
//                 <FileText size={24} />
//               </div>
//               Quotation Builder
//             </h2>

//             <button
//               type="submit"
//               disabled={!clientName || subtotal === 0 || isGenerating}
//               className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-xl shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all group"
//             >
//               {isGenerating ? (
//                 <Loader2 className="animate-spin" />
//               ) : (
//                 <Download size={20} />
//               )}

//               {isGenerating ? "Processing..." : "Generate PDF"}

//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
//             </button>
//           </div>

//           {/* LEFT SIDE */}
//           <div className="lg:col-span-8 space-y-6">
//             <div className="bg-white dark:bg-[#0e1626] p-8 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
//               <h2 className="text-2xl font-black mb-6 dark:text-white flex items-center gap-2">
//                 <Layers className="text-blue-500" />
//                 Service Items
//               </h2>

//               <div className="space-y-6">
//                 {items.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="p-6 bg-slate-50 dark:bg-[#060b16] rounded-2xl border border-transparent hover:border-blue-500/30 transition-all"
//                   >
//                     <div className="flex justify-between items-start gap-4 mb-2">
//                       <input
//                         className="text-lg font-bold bg-transparent dark:text-white outline-none w-full border-b border-slate-200 dark:border-white/10 focus:border-blue-500"
//                         placeholder="Main Title"
//                         value={
//                           item.title
//                             ? item.title
//                             : item.description
//                         }
//                         onChange={(e) =>
//                           updateItem(
//                             idx,
//                             "title",
//                             e.target.value
//                           )
//                         }
//                       />

//                       <button
//                         type="button"
//                         onClick={() =>
//                           setItems(
//                             items.filter((_, i) => i !== idx)
//                           )
//                         }
//                         className="text-slate-400 hover:text-red-500"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>

//                     <input
//                       className="w-full mb-4 text-sm bg-transparent dark:text-slate-300 outline-none border-b border-slate-200 dark:border-white/10 focus:border-blue-500 pb-2"
//                       placeholder="Subtitle"
//                       value={item.subtitle}
//                       onChange={(e) =>
//                         updateItem(
//                           idx,
//                           "subtitle",
//                           e.target.value
//                         )
//                       }
//                     />

//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       <div>
//                         <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
//                           Qty
//                         </label>

//                         <input
//                           type="number"
//                           className="w-full bg-white dark:bg-[#0e1626] p-2 rounded-lg dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             updateItem(
//                               idx,
//                               "quantity",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>

//                       <div>
//                         <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
//                           Rate
//                         </label>

//                         <input
//                           type="number"
//                           className="w-full bg-white dark:bg-[#0e1626] p-2 rounded-lg dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                           value={item.rate}
//                           onChange={(e) =>
//                             updateItem(
//                               idx,
//                               "rate",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>

//                       <div>
//                         <label className="text-[10px] uppercase font-black text-sky-500 block mb-1">
//                           GST %
//                         </label>

//                         <select
//                           className="w-full bg-white dark:bg-[#0e1626] p-2 rounded-lg dark:text-white outline-none border border-sky-500/30"
//                           value={item.gstRate}
//                           onChange={(e) =>
//                             updateItem(
//                               idx,
//                               "gstRate",
//                               e.target.value
//                             )
//                           }
//                         >
//                           {[0, 5, 12, 18, 28].map((v) => (
//                             <option key={v} value={v}>
//                               {v}% GST
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="text-right">
//                         <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
//                           Total
//                         </label>

//                         <div className="text-lg font-black dark:text-white text-blue-500">
//                           ₹
//                           {calculateItemTotal(item).toLocaleString()}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 type="button"
//                 onClick={() =>
//                   setItems([
//                     ...items,
//                     {
//                       title: "",
//                       subtitle: "",
//                       description: "",
//                       quantity: 1,
//                       rate: 0,
//                       gstRate: 18,
//                     },
//                   ])
//                 }
//                 className="mt-6 w-full py-4 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400 font-bold hover:border-blue-500 hover:text-blue-500 transition-all"
//               >
//                 + Add New Custom Item
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="lg:col-span-4 space-y-6">
//             <div className="bg-white dark:bg-[#0e1626] p-6 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
//               <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
//                 <User size={18} /> Client Details
//               </h3>

//               <div className="space-y-3">
//                 <input
//                   className="w-full bg-slate-50 dark:bg-[#060b16] p-3 rounded-xl dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                   placeholder="Name"
//                   value={clientName}
//                   onChange={(e) =>
//                     setClientName(e.target.value)
//                   }
//                 />

//                 <input
//                   className="w-full bg-slate-50 dark:bg-[#060b16] p-3 rounded-xl dark:text-white outline-none border border-slate-200 dark:border-white/10"
//                   placeholder="Mobile"
//                   value={clientMobile}
//                   onChange={(e) =>
//                     setClientMobile(e.target.value)
//                   }
//                 />
//               </div>
//             </div>

//             <div className="bg-white dark:bg-[#0e1626] p-6 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
//               <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
//                 <Zap size={18} /> Catalog
//               </h3>

//               <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
//                 {preDefinedServices.map((group, i) => (
//                   <div key={i}>
//                     <p className="text-[10px] uppercase font-black text-blue-500 mb-2">
//                       {group.category}
//                     </p>

//                     <div className="grid gap-2">
//                       {group.services.map((s, si) => (
//                         <label
//                           key={si}
//                           className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all text-xs font-bold border ${
//                             selectedServices.includes(
//                               `${s.title} - ${s.subtitle}`
//                             )
//                               ? "bg-blue-600 text-white border-blue-600"
//                               : "bg-slate-50 dark:bg-[#060b16] dark:text-slate-300 border-slate-200 dark:border-white/10"
//                           }`}
//                         >
//                           <input
//                             type="checkbox"
//                             checked={selectedServices.includes(
//                               `${s.title} - ${s.subtitle}`
//                             )}
//                             onChange={() => toggleService(s)}
//                             className="accent-blue-600 w-4 h-4"
//                           />

//                           <div>
//                             <p className="text-sm font-black">
//                               {s.subtitle}
//                             </p>
//                           </div>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-blue-600 p-8 rounded-[2rem] shadow-xl text-white">
//               <p className="text-xs uppercase font-black opacity-70 tracking-widest">
//                 Grand Total
//               </p>

//               <div className="text-4xl font-black mb-6">
//                 ₹{grandTotal.toLocaleString()}
//               </div>

//               {warning && (
//                 <div className="mb-4 bg-red-500/10 border border-red-500/30 text-white p-3 rounded-xl text-sm font-bold">
//                   {warning}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={isGenerating}
//                 className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-100 disabled:opacity-50 transition-all shadow-xl"
//               >
//                 {isGenerating ? (
//                   <Loader2 className="animate-spin" />
//                 ) : (
//                   <Download size={20} />
//                 )}

//                 Generate PDF
//               </button>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence>
//           {showSuccess && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
//             >
//               <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[3rem] text-center max-w-sm w-full">
//                 <CheckCircle
//                   size={60}
//                   className="text-green-500 mx-auto mb-4"
//                 />

//                 <h2 className="text-2xl font-black dark:text-white">
//                   Success!
//                 </h2>

//                 <p className="text-slate-500 mt-2 mb-6">
//                   The quotation has been downloaded.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setShowSuccess(false)}
//                   className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold"
//                 >
//                   Done
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </form>
//   );
// };

// export default QuotationGenerator;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  User,
  CheckCircle,
  Loader2,
  Zap,
  Layers,
  Trash2,
  Sparkles,
  ShieldCheck,
  Calculator,
  FileText,
  ArrowRight,
} from "lucide-react";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const QuotationGenerator = () => {
  // ---------------- STATE ----------------
  const [items, setItems] = useState<any[]>([
    {
      title: "",
      subtitle: "",
      description: "",
      quantity: 1,
      rate: 0,
      gstRate: 18,
    },
  ]);

  const [clientName, setClientName] = useState("");
  const [clientMobile, setClientMobile] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [warning, setWarning] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // ---------------- SERVICES ----------------
  const preDefinedServices = [
    {
      category: "Work From Home Setup",
      services: [
        {
          title: "Work From Home Setup",
          subtitle: "Ergonomic Desk & Chair Assembly",
          rate: 1500,
        },
        {
          title: "Work From Home Setup",
          subtitle: "VPN & Secure Remote Access",
          rate: 3500,
        },
      ],
    },

    {
      category: "Repair & Maintenance",
      services: [
        {
          title: "Repair & Maintenance",
          subtitle: "Laptop/Desktop Component Repair",
          rate: 2500,
        },
        {
          title: "Repair & Maintenance",
          subtitle: "Motherboard Chip-level Repair",
          rate: 4500,
        },
      ],
    },
  ];

  // ---------------- HELPERS ----------------
  const calculateItemTotal = (item: any) => {
    const qty = Number(item.quantity) || 0;
    const rate = Number(item.rate) || 0;
    const gst = Number(item.gstRate) || 0;

    const subtotal = qty * rate;
    const gstAmount = subtotal * (gst / 100);

    return subtotal + gstAmount;
  };

  const grandTotal = items.reduce(
    (acc: number, item: any) => acc + calculateItemTotal(item),
    0
  );

  const subtotal = grandTotal;
  const total = grandTotal;

  // ---------------- UPDATE ITEM ----------------
  const updateItem = (
    index: number,
    field: string,
    value: string
  ) => {
    const newItems = [...items];

    if (newItems[index]) {
      const isNumeric = [
        "quantity",
        "rate",
        "gstRate",
      ].includes(field);

      const sanitizedValue = isNumeric
        ? value === ""
          ? 0
          : parseFloat(value)
        : value;

      newItems[index] = {
        ...newItems[index],
        [field]: sanitizedValue,
      };

      setItems(newItems);
    }
  };

  // ---------------- MULTI SELECT ----------------
  const toggleService = (service: any) => {
    const uniqueName = `${service.title} - ${service.subtitle}`;

    const alreadySelected =
      selectedServices.includes(uniqueName);

    if (alreadySelected) {
      setSelectedServices(
        selectedServices.filter(
          (name) => name !== uniqueName
        )
      );

      setItems(
        items.filter(
          (item) =>
            item.description !== uniqueName
        )
      );
    } else {
      setSelectedServices([
        ...selectedServices,
        uniqueName,
      ]);

      const newItem = {
        title: service.title,
        subtitle: service.subtitle,
        description: uniqueName,
        quantity: 1,
        rate: service.rate,
        gstRate: 18,
      };

      if (
        items.length === 1 &&
        items[0].description === ""
      ) {
        setItems([newItem]);
      } else {
        setItems([...items, newItem]);
      }
    }
  };

  // ---------------- PDF ----------------
  const handleGenerate = async () => {
    if (!clientName.trim()) {
      setWarning("Please enter client name");
      return;
    }

    const invalidItem = items.find(
      (item) =>
        !item.title?.trim() ||
        !item.subtitle?.trim() ||
        item.quantity <= 0 ||
        item.rate <= 0
    );

    if (invalidItem) {
      setWarning(
        "Please fill all blank fields before generating PDF"
      );
      return;
    }

    setWarning("");
    setIsGenerating(true);

    try {
      const doc = new jsPDF();

      doc.setFontSize(20);
      doc.setTextColor(37, 99, 235);
      doc.text("SOFTLINK SOLUTIONS", 14, 20);

      doc.setFontSize(10);
      doc.setTextColor(100);

      doc.text(`Client: ${clientName}`, 14, 35);
      doc.text(`Mobile: ${clientMobile}`, 14, 42);
      doc.text(
        `Date: ${new Date().toLocaleDateString()}`,
        150,
        35
      );

      const tableData = items.map((item) => {
        const sub = item.quantity * item.rate;
        const gstAmt = sub * (item.gstRate / 100);

        return [
          `${item.title}\n${item.subtitle}`,
          item.quantity,
          `INR ${item.rate}`,
          `${item.gstRate}%`,
          `INR ${(sub + gstAmt).toLocaleString()}`,
        ];
      });

      autoTable(doc, {
        startY: 50,
        head: [
          [
            "Service Description",
            "Qty",
            "Rate",
            "GST",
            "Total",
          ],
        ],
        body: tableData,
        headStyles: {
          fillColor: [37, 99, 235],
        },
        styles: {
          fontSize: 10,
          cellPadding: 4,
        },
      });

      const finalY = (doc as any).lastAutoTable
        ? (doc as any).lastAutoTable.finalY
        : 150;

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(
        `Grand Total: INR ${grandTotal.toLocaleString()}`,
        140,
        finalY + 20
      );

      doc.save(
        `Quotation_${clientName.replace(/\s+/g, "_")}.pdf`
      );

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("PDF Error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleGenerate();
      }}
    >
      <div className="min-h-screen bg-slate-50 dark:bg-[#060b16] py-12 px-6 font-sans">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 lg:col-span-12">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-200">
                <Sparkles size={14} className="animate-pulse" />
                Self-Service Portal
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-[#142157] dark:text-white leading-[0.95] tracking-tighter mb-8">
                Instant <span className="text-blue-600">Quotes.</span>
                <br />
                <span className="text-sky-400 dark:text-sky-400">
                  Zero Wait Time.
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
                Build your customized IT service package in seconds.
                Enter your requirements below and download a professional
                PDF quotation immediately.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <ShieldCheck size={18} className="text-blue-600" />
                  GST Compliant
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <Zap size={18} className="text-blue-600" />
                  Admin Notified
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-2/5 w-full bg-blue-50 dark:bg-[#182a47] p-8 rounded-[3rem] border border-blue-100 dark:border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-500/20">
                <Calculator size={32} />
              </div>

              <h3 className="text-2xl font-black dark:text-white mb-2 tracking-tight">
                Current Estimate
              </h3>

              <div className="text-4xl font-black text-blue-600">
                ₹{total.toLocaleString()}
              </div>

              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">
                Inc. GST
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-10 gap-6 lg:col-span-12">
            <h2 className="text-3xl font-black text-[#142157] dark:text-white flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <FileText size={24} />
              </div>
              Quotation Builder
            </h2>

            <button
              type="submit"
              disabled={!clientName || subtotal === 0 || isGenerating}
              className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-xl shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all group"
            >
              {isGenerating ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Download size={20} />
              )}

              {isGenerating ? "Processing..." : "Generate PDF"}

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* LEFT SIDE */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white dark:bg-[#0e1626] p-8 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
              
              <h2 className="text-2xl font-black mb-6 dark:text-white flex items-center gap-2">
                <Layers className="text-blue-500" />
                Service Items
              </h2>

              <div className="space-y-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-slate-50 dark:bg-[#060b16] rounded-2xl border border-transparent hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      
                      <input
                        className="text-lg font-bold bg-transparent dark:text-white outline-none w-full border-b border-slate-200 dark:border-white/10 focus:border-blue-500"
                        placeholder="Main Title"
                        value={item.title ? item.title : item.description}
                        onChange={(e) =>
                          updateItem(idx, "title", e.target.value)
                        }
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setItems(items.filter((_, i) => i !== idx))
                        }
                        className="text-slate-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <input
                      className="w-full mb-4 text-sm bg-transparent dark:text-slate-300 outline-none border-b border-slate-200 dark:border-white/10 focus:border-blue-500 pb-2"
                      placeholder="Subtitle"
                      value={item.subtitle}
                      onChange={(e) =>
                        updateItem(idx, "subtitle", e.target.value)
                      }
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      
                      <div>
                        <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
                          Qty
                        </label>

                        <input
                          type="number"
                          className="w-full bg-white dark:bg-[#0e1626] p-2 rounded-lg dark:text-white outline-none border border-slate-200 dark:border-white/10"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(idx, "quantity", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
                          Rate
                        </label>

                        <input
                          type="number"
                          className="w-full bg-white dark:bg-[#0e1626] p-2 rounded-lg dark:text-white outline-none border border-slate-200 dark:border-white/10"
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(idx, "rate", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase font-black text-sky-500 block mb-1">
                          GST %
                        </label>

                        <select
                          className="w-full bg-white dark:bg-[#0e1626] p-2 rounded-lg dark:text-white outline-none border border-sky-500/30"
                          value={item.gstRate}
                          onChange={(e) =>
                            updateItem(idx, "gstRate", e.target.value)
                          }
                        >
                          {[0, 5, 12, 18, 28].map((v) => (
                            <option key={v} value={v}>
                              {v}% GST
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="text-right">
                        <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">
                          Total
                        </label>

                        <div className="text-lg font-black dark:text-white text-blue-500">
                          ₹{calculateItemTotal(item).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setItems([
                    ...items,
                    {
                      title: "",
                      subtitle: "",
                      description: "",
                      quantity: 1,
                      rate: 0,
                      gstRate: 18,
                    },
                  ])
                }
                className="mt-6 w-full py-4 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400 font-bold hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                + Add New Custom Item
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white dark:bg-[#0e1626] p-6 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
              <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
                <User size={18} /> Client Details
              </h3>

              <div className="space-y-3">
                <input
                  className="w-full bg-slate-50 dark:bg-[#060b16] p-3 rounded-xl dark:text-white outline-none border border-slate-200 dark:border-white/10"
                  placeholder="Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />

                <input
                  className="w-full bg-slate-50 dark:bg-[#060b16] p-3 rounded-xl dark:text-white outline-none border border-slate-200 dark:border-white/10"
                  placeholder="Mobile"
                  value={clientMobile}
                  onChange={(e) => setClientMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-white dark:bg-[#0e1626] p-6 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
              <h3 className="font-black dark:text-white mb-4 flex items-center gap-2">
                <Zap size={18} /> Catalog
              </h3>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {preDefinedServices.map((group, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase font-black text-blue-500 mb-2">
                      {group.category}
                    </p>

                    <div className="grid gap-2">
                      {group.services.map((s, si) => (
                        <label
                          key={si}
                          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all text-xs font-bold border ${
                            selectedServices.includes(
                              `${s.title} - ${s.subtitle}`
                            )
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-slate-50 dark:bg-[#060b16] dark:text-slate-300 border-slate-200 dark:border-white/10"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(
                              `${s.title} - ${s.subtitle}`
                            )}
                            onChange={() => toggleService(s)}
                            className="accent-blue-600 w-4 h-4"
                          />

                          <div>
                            <p className="text-sm font-black">
                              {s.subtitle}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-[2rem] shadow-xl text-white">
              <p className="text-xs uppercase font-black opacity-70 tracking-widest">
                Grand Total
              </p>

              <div className="text-4xl font-black mb-6">
                ₹{grandTotal.toLocaleString()}
              </div>

              {warning && (
                <div className="mb-4 bg-red-500/10 border border-red-500/30 text-white p-3 rounded-xl text-sm font-bold">
                  {warning}
                </div>
              )}

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-100 disabled:opacity-50 transition-all shadow-xl"
              >
                {isGenerating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Download size={20} />
                )}

                Generate PDF
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
              <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[3rem] text-center max-w-sm w-full">
                <CheckCircle
                  size={60}
                  className="text-green-500 mx-auto mb-4"
                />

                <h2 className="text-2xl font-black dark:text-white">
                  Success!
                </h2>

                <p className="text-slate-500 mt-2 mb-6">
                  The quotation has been downloaded.
                </p>

                <button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold"
                >
                  Done
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default QuotationGenerator;