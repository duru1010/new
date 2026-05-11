"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Download, Calculator, User, 
  CheckCircle, X, FileText, Loader2,
  Sparkles, ShieldCheck, Zap, ArrowRight
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const QuotationGenerator = () => {
  const [items, setItems] = useState([{ description: '', quantity: 1, rate: 0 }]);
  const [clientName, setClientName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const preDefinedServices = [
    { name: "IT Support AMC (Standard)", rate: 15000 },
    { name: "IT Support AMC (Comprehensive)", rate: 25000 },
    { name: "Structured Cabling (Per Node)", rate: 850 },
    { name: "Firewall Configuration", rate: 5000 },
  ];

  const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const handleGenerate = async () => {
    if (!clientName || subtotal === 0) return;
    setIsGenerating(true);

    try {
      // 1. Create PDF Instance
      const doc = new jsPDF();
      
      // Branding Header
      doc.setFontSize(22);
      doc.setTextColor(37, 193, 197); // Brand Teal
      doc.text("SOFTLINK SOLUTIONS", 14, 22);
      
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text("IT Infrastructure & Maintenance Experts", 14, 30);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 22);
      doc.text(`Quote No: QTN-${Math.floor(Math.random() * 10000)}`, 160, 28);

      doc.setFontSize(12);
      doc.setTextColor(0);
      doc.text("QUOTATION FOR:", 14, 45);
      doc.setFont("helvetica", "bold");
      doc.text(clientName.toUpperCase(), 14, 52);

      const tableData = items.map(item => [
        item.description,
        item.quantity.toString(),
        `INR ${item.rate.toLocaleString()}`,
        `INR ${(item.quantity * item.rate).toLocaleString()}`
      ]);

      autoTable(doc, {
        startY: 60,
        head: [['Description', 'Qty', 'Rate', 'Amount']],
        body: tableData,
        headStyles: { fillColor: [37, 193, 197] },
        theme: 'striped'
      });

      const finalY = (doc as any).lastAutoTable.finalY + 10;
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Subtotal: INR ${subtotal.toLocaleString()}`, 140, finalY);
      doc.text(`GST (18%): INR ${gst.toLocaleString()}`, 140, finalY + 7);
      
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(37, 193, 197);
      doc.text(`Total: INR ${total.toLocaleString()}`, 140, finalY + 15);

      // 2. Local Download for User
      doc.save(`Quotation_${clientName.replace(/\s+/g, '_')}.pdf`);

      // 3. Prepare for Admin Email
      const pdfBase64 = doc.output('datauristring').split(',')[1];

      // 4. Submit to the "Smart" API Route
      const response = await fetch('/api/project-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          totalAmount: total.toLocaleString(),
          pdfBase64: pdfBase64
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        throw new Error("Admin sync failed");
      }

    } catch (err) {
      console.error("Workflow Error:", err);
      alert("Quotation downloaded, but admin notification failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  const addItem = () => setItems([...items, { description: '', quantity: 1, rate: 0 }]);
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems.length ? newItems : [{ description: '', quantity: 1, rate: 0 }]);
  };
  const updateItem = (index: number, field: string, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };
  const addQuickService = (service: {name: string, rate: number}) => {
    if (items.length === 1 && items[0].description === '' && items[0].rate === 0) {
      setItems([{ description: service.name, quantity: 1, rate: service.rate }]);
    } else {
      setItems([...items, { description: service.name, quantity: 1, rate: service.rate }]);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#333333] pt-32 pb-20 transition-colors duration-500 overflow-x-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25C1C5]/10 text-[#25C1C5] text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[#25C1C5]/20">
              <Sparkles size={14} className="animate-pulse" /> Self-Service Portal
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#333333] dark:text-white leading-[0.95] tracking-tighter mb-8">
              Instant <span className="text-[#25C1C5]">Quotes.</span> <br />
              <span className="text-slate-300 dark:text-slate-500">Zero Wait Time.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
              Build your customized IT service package in seconds. Enter your requirements below and download a professional PDF quotation immediately.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                <ShieldCheck size={18} className="text-[#25C1C5]" /> GST Compliant
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                <Zap size={18} className="text-[#25C1C5]" /> Admin Notified
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-2/5 w-full bg-slate-50 dark:bg-[#4a4a4a]/50 p-8 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center">
             <div className="w-16 h-16 bg-[#25C1C5] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-[#25C1C5]/20">
                <Calculator size={32} />
             </div>
             <h3 className="text-2xl font-black dark:text-white mb-2 tracking-tight">Current Estimate</h3>
             <div className="text-4xl font-black text-[#25C1C5]">₹{total.toLocaleString()}</div>
             <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2">Inc. 18% GST</p>
          </motion.div>
        </div>

        {/* Builder Interface */}
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
          <h2 className="text-3xl font-black text-[#333333] dark:text-white flex items-center gap-3">
            <div className="p-2 bg-[#25C1C5] rounded-lg text-white"><FileText size={24} /></div>
            Quotation Builder
          </h2>
          
          <button 
            onClick={handleGenerate}
            disabled={!clientName || subtotal === 0 || isGenerating}
            className="px-8 py-4 rounded-2xl bg-[#25C1C5] text-white font-bold shadow-xl shadow-[#25C1C5]/20 disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-[#1eb0b4] transition-all group"
          >
            {isGenerating ? <Loader2 className="animate-spin" /> : <Download size={20} />}
            {isGenerating ? 'Processing...' : 'Generate PDF'} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white dark:bg-[#4a4a4a] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#25C1C5] mb-6 flex items-center gap-2"><User size={16} /> Client Information</h3>
              <input 
                type="text" 
                placeholder="Enter Company or Client Name..."
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#333333] border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 text-lg dark:text-white focus:ring-2 focus:ring-[#25C1C5] outline-none"
              />
            </section>

            <section className="bg-white dark:bg-[#4a4a4a] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#25C1C5] flex items-center gap-2"><Plus size={16} /> Line Items</h3>
                <button onClick={addItem} className="flex items-center gap-2 text-xs font-black bg-[#25C1C5]/10 text-[#25C1C5] px-4 py-2 rounded-xl hover:bg-[#25C1C5]/20 transition-all">
                  <Plus size={14} /> Add Row
                </button>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {items.map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col md:flex-row gap-3 p-4 bg-slate-50 dark:bg-[#333333] rounded-2xl border border-transparent hover:border-[#25C1C5]/30 transition-all">
                      <input className="flex-[3] bg-transparent border-none px-2 py-1 dark:text-white outline-none font-medium" placeholder="Service Description" value={item.description} onChange={(e) => updateItem(index, 'description', e.target.value)} />
                      <div className="flex flex-1 gap-2">
                        <input type="number" className="w-full bg-white dark:bg-[#4a4a4a] rounded-xl px-3 py-2 text-center dark:text-white outline-none border border-transparent focus:border-[#25C1C5]" value={item.quantity} onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)} />
                        <input type="number" className="w-full bg-white dark:bg-[#4a4a4a] rounded-xl px-3 py-2 text-right dark:text-white outline-none border border-transparent focus:border-[#25C1C5]" value={item.rate} onChange={(e) => updateItem(index, 'rate', parseInt(e.target.value) || 0)} />
                        <button onClick={() => removeItem(index)} className="p-2 text-slate-400 hover:text-red-500"><X size={20} /></button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white dark:bg-[#4a4a4a] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl sticky top-32">
              <h3 className="text-xl font-black dark:text-white mb-6">Summary</h3>
              <div className="space-y-4 text-sm mb-10">
                <div className="flex justify-between text-slate-500"><span>Subtotal</span><span className="font-bold dark:text-white">₹{subtotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-slate-500"><span>GST (18%)</span><span className="font-bold text-red-500">+₹{gst.toLocaleString()}</span></div>
                <div className="h-px bg-slate-100 dark:bg-white/10 my-4" />
                <div className="flex justify-between items-end">
                  <span className="font-black dark:text-white">Total Amount</span>
                  <span className="text-3xl font-black text-[#25C1C5]">₹{total.toLocaleString()}</span>
                </div>
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Quick Add Services</h4>
              <div className="grid grid-cols-1 gap-2">
                {preDefinedServices.map((s, i) => (
                  <button key={i} onClick={() => addQuickService(s)} className="text-left px-4 py-3 rounded-xl border border-slate-100 dark:border-white/5 hover:border-[#25C1C5] text-xs font-bold transition-all flex justify-between items-center group dark:text-white dark:bg-[#333333]">
                    {s.name} <Plus size={14} className="text-[#25C1C5] opacity-0 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white dark:bg-[#333333] p-8 rounded-[3rem] text-center max-w-sm w-full shadow-2xl border border-white/10">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/30"><CheckCircle size={40} /></div>
              <h2 className="text-2xl font-black dark:text-white mb-2">Quotation Ready!</h2>
              <p className="text-slate-500 text-sm mb-6">A copy has been downloaded and the admin has been notified via email.</p>
              <button onClick={() => setShowSuccess(false)} className="w-full py-4 bg-[#25C1C5] text-white rounded-2xl font-bold">Done</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuotationGenerator;