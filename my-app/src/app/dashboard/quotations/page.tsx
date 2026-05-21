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
  FileText,
  ArrowRight,
  Lock,
  KeyRound,
  Mail,
  Building,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const QuotationGenerator = () => {
  // ---------------- AUTH STATE ----------------
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const MASTER_ACCESS_KEY = "SOFTLINK2026";

  // ---------------- CORE GENERATOR STATE ----------------
  const [items, setItems] = useState<any[]>([
    {
      title: "Work From Home Setup",
      subServices: [
        {
          subtitle: "",
          description: "",
          quantity: 1,
          rate: 0,
          gstRate: 18,
        }
      ]
    },
  ]);

  const [clientName, setClientName] = useState("");
  const [clientMobile, setClientMobile] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientGst, setClientGst] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [warning, setWarning] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // ---------------- CATALOG DROPDOWN DATA ----------------
  const categoriesList = [
    "Work From Home Setup", 
    "Repair & Maintenance", 
    "CCTV System",
    "Software License",
    "Repair and Rental",
    "Networking",
    "Custom Solution"
  ];
  
  const [activeCatalogCategory, setActiveCatalogCategory] = useState("Work From Home Setup");

  const preDefinedServices = [
    {
      category: "Work From Home Setup",
      services: [
        { title: "Work From Home Setup", subtitle: "Ergonomic Desk & Chair Assembly", rate: 1500 },
        { title: "Work From Home Setup", subtitle: "VPN & Secure Remote Access", rate: 3500 },
        { title: "Work From Home Setup", subtitle: "Dual Monitor Setup Calibration", rate: 2000 },
      ],
    },
    {
      category: "Repair & Maintenance",
      services: [
        { title: "Repair & Maintenance", subtitle: "Laptop/Desktop Component Repair", rate: 2500 },
        { title: "Repair & Maintenance", subtitle: "Motherboard Chip-level Repair", rate: 4500 },
        { title: "Repair & Maintenance", subtitle: "OS Reinstallation & Optimization", rate: 1200 },
      ],
    },
    {
      category: "CCTV System",
      services: [
        { title: "CCTV System", subtitle: "4MP Bullet IP Camera Installation", rate: 3500 },
        { title: "CCTV System", subtitle: "8 Channel NVR Configured with 2TB HDD", rate: 12500 },
        { title: "CCTV System", subtitle: "CCTV Annual Maintenance Contract (AMC)", rate: 8000 },
        { title: "CCTV System", subtitle: "Cat6 Cabling & Conduit Laying (Per Mtr)", rate: 85 },
      ],
    },
    {
      category: "Software License",
      services: [
        { title: "Software License", subtitle: "Windows 11 Pro Commercial License", rate: 9500 },
        { title: "Software License", subtitle: "Microsoft 365 Business Standard (Annual)", rate: 6600 },
        { title: "Software License", subtitle: "QuickHeal Total Security Antivirus 3-User", rate: 2400 },
        { title: "Software License", subtitle: "Adobe Creative Cloud Teams Subscription", rate: 68000 },
      ],
    },
    {
      category: "Repair and Rental",
      services: [
        { title: "Repair and Rental", subtitle: "Core i5 Laptop Monthly Rental", rate: 2500 },
        { title: "Repair and Rental", subtitle: "LaserJet Printer Monthly Rental", rate: 3500 },
        { title: "Repair and Rental", subtitle: "Temporary Server Setup (Weekly Rental)", rate: 15000 },
        { title: "Repair and Rental", subtitle: "Standby Laptop Provisioning Fee", rate: 1000 },
      ],
    },
    {
      category: "Networking",
      services: [
        { title: "Networking", subtitle: "Managed 24-Port Gigabit Switch Setup", rate: 14500 },
        { title: "Networking", subtitle: "Dual-Band WiFi 6 Access Point Config", rate: 6500 },
        { title: "Networking", subtitle: "Firewall Security Gateway Deployment", rate: 28000 },
        { title: "Networking", subtitle: "Network Rack Dressing & Labeling Setup", rate: 5000 },
      ],
    },
    {
      category: "Custom Solution",
      services: [
        { title: "Custom Solution", subtitle: "Custom Server Cloud Integration", rate: 12000 },
        { title: "Custom Solution", subtitle: "Network Architecture Consultation", rate: 8500 },
      ]
    }
  ];

  const currentProductList = preDefinedServices.find(
    (group) => group.category === activeCatalogCategory
  )?.services || [];

  // ---------------- HANDLERS ----------------
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsAuthenticating(true);

    setTimeout(() => {
      if (accessKey === MASTER_ACCESS_KEY) {
        setIsAuthenticated(true);
      } else {
        setAuthError("Invalid access credential. Please try again.");
      }
      setIsAuthenticating(false);
    }, 600); 
  };

  const calculateSubServiceTotal = (subService: any) => {
    const qty = Number(subService.quantity) || 0;
    const rate = Number(subService.rate) || 0;
    const gst = Number(subService.gstRate) || 0;
    const subtotal = qty * rate;
    return subtotal + (subtotal * (gst / 100));
  };

  const grandTotal = items.reduce(
    (acc: number, item: any) =>
      acc + item.subServices.reduce((sAcc: number, sub: any) => sAcc + calculateSubServiceTotal(sub), 0),
    0
  );

  const updateMainTitle = (itemIndex: number, value: string) => {
    const newItems = [...items];
    if (newItems[itemIndex]) {
      newItems[itemIndex].title = value;
      setItems(newItems);
    }
  };

  const updateSubService = (itemIndex: number, subIndex: number, field: string, value: string) => {
    const newItems = [...items];
    if (newItems[itemIndex] && newItems[itemIndex].subServices[subIndex]) {
      const isNumeric = ["quantity", "rate", "gstRate"].includes(field);
      newItems[itemIndex].subServices[subIndex] = {
        ...newItems[itemIndex].subServices[subIndex],
        [field]: isNumeric ? (value === "" ? 0 : parseFloat(value)) : value,
      };
      setItems(newItems);
    }
  };

  const toggleService = (service: any) => {
    const uniqueName = `${service.title} - ${service.subtitle}`;
    if (selectedServices.includes(uniqueName)) {
      setSelectedServices(selectedServices.filter((name) => name !== uniqueName));
      const updated = items.map((item) => {
        if (item.title === service.title) {
          return { ...item, subServices: item.subServices.filter((s: any) => s.description !== uniqueName) };
        }
        return item;
      }).filter((item) => item.subServices.length > 0);
      setItems(updated.length === 0 ? [{ title: "Work From Home Setup", subServices: [{ subtitle: "", description: "", quantity: 1, rate: 0, gstRate: 18 }] }] : updated);
    } else {
      setSelectedServices([...selectedServices, uniqueName]);
      const newSub = { subtitle: service.subtitle, description: uniqueName, quantity: 1, rate: service.rate, gstRate: 18 };
      const idx = items.findIndex((item) => item.title === service.title);
      if (idx > -1) {
        const newItems = [...items];
        newItems[idx].subServices.push(newSub);
        setItems(newItems);
      } else {
        if (items.length === 1 && items[0].subServices.length === 1 && items[0].subServices[0].rate === 0) {
          setItems([{ title: service.title, subServices: [newSub] }]);
        } else {
          setItems([...items, { title: service.title, subServices: [newSub] }]);
        }
      }
    }
  };

  const removeSubService = (itemIndex: number, subIndex: number) => {
    const newItems = [...items];
    const target = newItems[itemIndex].subServices[subIndex];
    if (target.description) setSelectedServices(selectedServices.filter((name) => name !== target.description));
    newItems[itemIndex].subServices.splice(subIndex, 1);
    if (newItems[itemIndex].subServices.length === 0) newItems.splice(itemIndex, 1);
    setItems(newItems.length === 0 ? [{ title: "Work From Home Setup", subServices: [{ subtitle: "", description: "", quantity: 1, rate: 0, gstRate: 18 }] }] : newItems);
  };

  const handleGenerate = async () => {
    if (!clientName.trim()) {
      setWarning("Please enter client name");
      return;
    }
    setWarning("");
    setIsGenerating(true);

    
try {
  const doc = new jsPDF();

  // ================= COLORS =================
  const primaryBlue = [37, 99, 235]; // blue-600
  const darkBlue = [30, 64, 175];
  const lightBlue = [219, 234, 254];
  const grayText = [90, 90, 90];

  // ================= HEADER =================
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(37, 99, 235);
  doc.text("SOFTLINK SOLUTIONS", 14, 20);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);

  const quotationNo = `SLS-${Math.floor(
    100000 + Math.random() * 900000
  )}`;

  doc.text(`Quotation No: ${quotationNo}`, 145, 15);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 145, 21);

  // Header Divider
  doc.setDrawColor(219, 234, 254);
  doc.setLineWidth(0.8);
  doc.line(14, 28, 196, 28);

  // ================= FROM SECTION =================
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 64, 175);
  doc.text("From:", 14, 36);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 90, 90);

  doc.text("Softlink Solutions Office Plaza, Pune", 14, 42);
  doc.text("Email: contact@softlink.com", 14, 48);
  doc.text("Phone: +91 98765 43210", 14, 54);
  doc.text("GST No: 27ABCDE1234F1Z5", 14, 60);

  // ================= CLIENT SECTION =================
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 64, 175);
  doc.text("Quotation For:", 115, 36);

  // Client Box
  doc.setDrawColor(230, 230, 230);
  doc.rect(112, 40, 82, 34);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 90, 90);

  let clientY = 46;

  doc.text(`Client Name: ${clientName || "N/A"}`, 115, clientY);
  clientY += 6;

  doc.text(`Mobile: ${clientMobile || "N/A"}`, 115, clientY);
  clientY += 6;

  doc.text(`Email: ${clientEmail || "N/A"}`, 115, clientY);
  clientY += 6;

  doc.text(`GST No: ${clientGst || "N/A"}`, 115, clientY);
  clientY += 6;

  doc.text(`Address: ${clientAddress || "N/A"}`, 115, clientY);

  // ================= TABLE DATA =================
  const tableData: any[] = [];

  items.forEach((item: any) => {
    item.subServices.forEach((sub: any, subIndex: number) => {
      const base = sub.quantity * sub.rate;
      const gstAmount = base * (sub.gstRate / 100);
      const lineTotal = base + gstAmount;

      const displayTitle = subIndex === 0 ? item.title : "";

      tableData.push([
        displayTitle,
        sub.subtitle,
        sub.quantity,
        `INR ${sub.rate.toLocaleString()}`,
        `${sub.gstRate}%`,
        `INR ${lineTotal.toLocaleString()}`
      ]);
    });
  });

  // ================= TABLE =================
  autoTable(doc, {
    startY: 82,

    head: [[
      "Category",
      "Service Description",
      "Qty",
      "Rate",
      "GST",
      "Total"
    ]],

    body: tableData,

    headStyles: {
      fillColor: [37, 99, 235],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center"
    },

    styles: {
      fontSize: 9,
      cellPadding: 4,
      lineColor: [230, 230, 230],
      lineWidth: 0.3
    },

    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },

    columnStyles: {
      0: {
        fontStyle: "bold",
        textColor: [30, 64, 175],
        cellWidth: 42
      },

      1: {
        cellWidth: 58
      },

      2: {
        halign: "center",
        cellWidth: 18
      },

      3: {
        halign: "right",
        cellWidth: 28
      },

      4: {
        halign: "center",
        cellWidth: 18
      },

      5: {
        halign: "right",
        cellWidth: 30
      }
    },

    didParseCell: function (data: any) {
      // Remove repeated category borders
      if (
        data.column.index === 0 &&
        data.cell.text[0] === ""
      ) {
        data.cell.styles.lineWidth = 0;
      }
    }
  });

  // ================= FINAL TOTAL =================
  const finalY = (doc as any).lastAutoTable
    ? (doc as any).lastAutoTable.finalY
    : 150;

  // Total Divider
  doc.setDrawColor(219, 234, 254);
  doc.line(120, finalY + 8, 196, finalY + 8);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(37, 99, 235);

  doc.text(
    `Grand Total: INR ${grandTotal.toLocaleString()}`,
    125,
    finalY + 18
  );

  // ================= FOOTER =================
  doc.setDrawColor(230, 230, 230);
  doc.line(14, finalY + 30, 196, finalY + 30);

  // Validity Note
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120);

  doc.text(
    "This quotation is valid for 7 days from the issue date.",
    14,
    finalY + 40
  );

  // Signature Area
  doc.setFont("helvetica", "normal");

  doc.line(14, finalY + 58, 70, finalY + 58);
  doc.text("Client Signature", 14, finalY + 64);

  doc.line(140, finalY + 58, 196, finalY + 58);
  doc.text("Authorized Signatory", 140, finalY + 64);

  // ================= SAVE PDF =================
  doc.save(
    `Quotation_${clientName.replace(/\s+/g, "_")}.pdf`
  );

  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 3000);

} catch (err) {
  console.error(err);

} finally {
  setIsGenerating(false);
}
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0813] flex items-center justify-center pt-28 md:pt-36 pb-12 px-4 font-sans">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full bg-white dark:bg-[#120d24] p-8 rounded-[2rem] shadow-xl border border-blue-100 dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-400" />
          <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4"><Lock size={24} /></div>
          <h2 className="text-2xl font-black text-blue-950 dark:text-white text-center mb-1">Portal Access Required</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1 relative">
              <div className="relative flex items-center">
                <KeyRound className="absolute left-4 text-blue-300 pointer-events-none" size={16} />
                <input type="password" required placeholder="Enter Access Key" value={accessKey} onChange={(e) => setAccessKey(e.target.value)} className="w-full bg-blue-50/50 dark:bg-[#0b0813] pl-11 pr-4 py-3 rounded-xl dark:text-white outline-none border border-blue-100 dark:border-white/10 focus:border-blue-500 font-mono text-xs tracking-widest" />
              </div>
            </div>
            {authError && <div className="bg-red-500/10 text-red-600 p-3 rounded-lg text-xs font-bold">{authError}</div>}
            <button type="submit" disabled={isAuthenticating} className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">{isAuthenticating ? <Loader2 className="animate-spin" size={18} /> : "Unlock System"}</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
      <div className="min-h-screen bg-blue-50/30 dark:bg-[#0b0813] pt-28 md:pt-36 pb-12 px-4 md:px-12 font-sans flex justify-center">
        <div className="w-full max-w-5xl bg-white dark:bg-[#120d24] rounded-3xl shadow-xl border border-blue-100 dark:border-white/5 p-6 md:p-10 space-y-8">
          
          {/* HEADER ROW */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-blue-100 dark:border-white/10 pb-4 gap-4">
            <h2 className="text-xl font-black text-blue-950 dark:text-white flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg text-white"><FileText size={18} /></div>
              Quotation Builder
            </h2>
            <div className="text-xs font-medium text-blue-400">Date: {new Date().toLocaleDateString()}</div>
          </div>

          {/* SECTION 1: CLIENT DETAILS */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <User size={16} /> Client Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative flex items-center">
                <User className="absolute left-3 text-blue-300" size={14} />
                <input required className="w-full bg-blue-50/50 dark:bg-[#0b0813] pl-9 pr-3 py-2.5 rounded-lg text-xs dark:text-white border border-blue-100 dark:border-white/10 focus:border-blue-500 outline-none" placeholder="Client Name *" value={clientName} onChange={(e) => setClientName(e.target.value)} />
              </div>
              <div className="relative flex items-center">
                <Phone className="absolute left-3 text-blue-300" size={14} />
                <input className="w-full bg-blue-50/50 dark:bg-[#0b0813] pl-9 pr-3 py-2.5 rounded-lg text-xs dark:text-white border border-blue-100 dark:border-white/10 focus:border-blue-500 outline-none" placeholder="Phone Number" value={clientMobile} onChange={(e) => setClientMobile(e.target.value)} />
              </div>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 text-blue-300" size={14} />
                <input type="email" className="w-full bg-blue-50/50 dark:bg-[#0b0813] pl-9 pr-3 py-2.5 rounded-lg text-xs dark:text-white border border-blue-100 dark:border-white/10 focus:border-blue-500 outline-none" placeholder="Email ID" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
              </div>
              <div className="relative flex items-center md:col-span-1">
                <Building className="absolute left-3 text-blue-300" size={14} />
                <input className="w-full bg-blue-50/50 dark:bg-[#0b0813] pl-9 pr-3 py-2.5 rounded-lg text-xs dark:text-white border border-blue-100 dark:border-white/10 focus:border-blue-500 outline-none uppercase" placeholder="GST No." value={clientGst} onChange={(e) => setClientGst(e.target.value)} />
              </div>
              <div className="relative flex items-center md:col-span-2">
                <MapPin className="absolute left-3 text-blue-300" size={14} />
                <input className="w-full bg-blue-50/50 dark:bg-[#0b0813] pl-9 pr-3 py-2.5 rounded-lg text-xs dark:text-white border border-blue-100 dark:border-white/10 focus:border-blue-500 outline-none" placeholder="Full Address" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
              </div>
            </div>
          </div>

          {/* SECTION 2: CATALOG QUICK SELECT */}
          <div className="space-y-4 bg-blue-50/50 dark:bg-[#0b0813] p-5 rounded-2xl border border-blue-100/70 dark:border-white/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-blue-100 dark:border-white/10 pb-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Zap size={14} className="text-amber-500" /> Catalog Quick Select
              </h3>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-[11px] font-bold text-blue-400 whitespace-nowrap">Select Title:</span>
                <select
                  className="text-xs font-bold bg-white dark:bg-[#120d24] p-2 rounded-lg text-blue-600 dark:text-white outline-none border border-blue-100 dark:border-white/10 focus:border-blue-500 min-w-[200px] cursor-pointer shadow-sm"
                  value={activeCatalogCategory}
                  onChange={(e) => setActiveCatalogCategory(e.target.value)}
                >
                  {categoriesList.map((cat, cIdx) => (
                    <option key={cIdx} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block mb-1">Available Products / Sub-Items:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentProductList.map((product, pIdx) => {
                  const uniqueName = `${product.title} - ${product.subtitle}`;
                  const isSelected = selectedServices.includes(uniqueName);
                  return (
                    <div
                      key={pIdx}
                      onClick={() => toggleService(product)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex justify-between items-center group relative overflow-hidden ${
                        isSelected
                          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10"
                          : "bg-white dark:bg-[#120d24] dark:text-blue-200 border-blue-100 dark:border-white/10 hover:border-blue-500/50 hover:bg-blue-50/50"
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="text-xs font-bold leading-tight line-clamp-1">{product.subtitle}</div>
                        <div className={`text-[10px] font-semibold ${isSelected ? "text-blue-100" : "text-blue-400"}`}>
                          ₹{product.rate.toLocaleString()}
                        </div>
                      </div>
                      <div className={`p-1 rounded-md transition-colors shrink-0 ${isSelected ? "bg-white/20 text-white" : "bg-blue-50 dark:bg-[#1a1433] text-blue-400 group-hover:text-blue-500"}`}>
                        <Plus size={12} className={`transition-transform ${isSelected ? "rotate-45" : ""}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SECTION 3: LINE ITEMS WORKSPACE */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Layers size={16} /> Quotation Line Items
            </h3>

            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="border border-blue-100 dark:border-white/10 rounded-xl p-4 bg-white dark:bg-[#120d24] space-y-4">
                  
                  {/* CATEGORY WORKSPACE DROPDOWN */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 border-b border-blue-50 dark:border-white/10 pb-2">
                    <label className="text-xs font-black text-blue-400 uppercase tracking-wider min-w-[110px]">Category Block:</label>
                    <select
                      className="text-sm font-bold bg-blue-50/50 dark:bg-[#0b0813] p-2 rounded-lg text-blue-950 dark:text-white outline-none border border-blue-100 dark:border-white/10 focus:border-blue-500 max-w-xs w-full cursor-pointer"
                      value={item.title}
                      onChange={(e) => updateMainTitle(idx, e.target.value)}
                    >
                      <option value="" disabled>Select Service Category</option>
                      {categoriesList.map((cat, cIdx) => (
                        <option key={cIdx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* SUB-SERVICES FORM ELEMENT LIST */}
                  <div className="space-y-3">
                    {item.subServices.map((sub: any, sIdx: number) => (
                      <div key={sIdx} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center pb-3 border-b border-dashed border-blue-100 dark:border-white/5 last:border-none last:pb-0">
                        <div className="md:col-span-5">
                          <input className="w-full text-xs font-medium bg-transparent dark:text-blue-200 outline-none border-b border-transparent focus:border-blue-500 pb-0.5" placeholder="Service Action / Subtitle Description" value={sub.subtitle} onChange={(e) => updateSubService(idx, sIdx, "subtitle", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                          <input type="number" className="w-full bg-blue-50/50 dark:bg-[#0b0813] p-1.5 rounded text-xs text-center dark:text-white border border-blue-100 dark:border-white/5" placeholder="Qty" value={sub.quantity} onChange={(e) => updateSubService(idx, sIdx, "quantity", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                          <input type="number" className="w-full bg-blue-50/50 dark:bg-[#0b0813] p-1.5 rounded text-xs text-center dark:text-white border border-blue-100 dark:border-white/5" placeholder="Rate" value={sub.rate} onChange={(e) => updateSubService(idx, sIdx, "rate", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                          <select className="w-full bg-blue-50/50 dark:bg-[#0b0813] p-1.5 rounded text-xs dark:text-white border border-blue-100 dark:border-white/5" value={sub.gstRate} onChange={(e) => updateSubService(idx, sIdx, "gstRate", e.target.value)}>
                            {[0, 5, 12, 18, 28].map((v) => <option key={v} value={v}>{v}% GST</option>)}
                          </select>
                        </div>
                        <div className="md:col-span-1 flex justify-between items-center md:justify-end gap-2">
                          <div className="text-xs font-bold text-blue-600 md:hidden">Total:</div>
                          <div className="text-xs font-black dark:text-white">₹{calculateSubServiceTotal(sub).toLocaleString()}</div>
                          <button type="button" onClick={() => removeSubService(idx, sIdx)} className="text-blue-300 hover:text-red-500"><Trash2 size={14} /></button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button type="button" onClick={() => {
                    const newItems = [...items];
                    newItems[idx].subServices.push({ subtitle: "", description: "", quantity: 1, rate: 0, gstRate: 18 });
                    setItems(newItems);
                  }} className="text-[11px] text-blue-500 font-bold hover:underline">+ Add sub item row</button>
                </div>
              ))}
            </div>

            <button type="button" onClick={() => setItems([...items, { title: "Work From Home Setup", subServices: [{ subtitle: "", description: "", quantity: 1, rate: 0, gstRate: 18 }] }])} className="w-full py-2 border-2 border-dashed border-blue-200 dark:border-white/10 rounded-xl text-xs text-blue-400 font-bold hover:border-blue-500 hover:text-blue-500 transition-all">+ Add Custom Category Card</button>
          </div>

          {/* SECTION 4: GRAND TOTAL & ACTION FOOTER */}
          <div className="border-t border-blue-100 dark:border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-blue-50/40 dark:bg-[#17122b] p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Grand Total</span>
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400">₹{grandTotal.toLocaleString()}</div>
              <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">Incl. GST</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {warning && <div className="text-red-500 text-xs font-bold">{warning}</div>}
              <button
                type="submit" disabled={isGenerating || !clientName}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-xs font-black rounded-xl shadow-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
              >
                {isGenerating ? <Loader2 className="animate-spin" size={14} /> : <Download size={14} />}
                Generate PDF
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* SUCCESS PANEL MODAL */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white dark:bg-[#120d24] p-8 rounded-[2rem] text-center max-w-sm w-full border border-blue-100/50">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                <h2 className="text-xl font-black dark:text-white">Success!</h2>
                <p className="text-blue-400 text-xs mt-1 mb-4">The quotation has been downloaded.</p>
                <button type="button" onClick={() => setShowSuccess(false)} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs">Done</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default QuotationGenerator;