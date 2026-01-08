// "use client";
// import React from 'react';
// import { Check, X, Minus } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { motion } from 'framer-motion';

// export const Comparison = () => {
//     const features = [
//         { name: "Context Window", us: "128k Tokens", them: "8k-32k Tokens" },
//         { name: "Real-time Learning", us: true, them: false },
//         { name: "Team Collaboration", us: true, them: "Add-on" },
//         { name: "Privacy First", us: true, them: false },
//     ];

//     return (
//         <div className="w-full max-w-3xl mx-auto mt-16 px-4">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden"
//             >
//                 <div className="grid grid-cols-3 p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 text-sm font-semibold text-slate-900 dark:text-white">
//                     <div className="pl-4">Feature</div>
//                     <div className="text-center text-brand-end">Integen</div>
//                     <div className="text-center text-slate-500">Others</div>
//                 </div>

//                 {features.map((feature, idx) => (
//                     <div
//                         key={idx}
//                         className="grid grid-cols-3 p-4 border-b last:border-0 border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors text-sm items-center"
//                     >
//                         <div className="font-medium text-slate-700 dark:text-slate-300 pl-4">{feature.name}</div>

//                         <div className="flex justify-center text-brand-end font-medium">
//                             {feature.us === true ? (
//                                 <Check className="w-5 h-5 text-green-500" />
//                             ) : (
//                                 <span>{feature.us}</span>
//                             )}
//                         </div>

//                         <div className="flex justify-center text-slate-500">
//                             {feature.them === false ? (
//                                 <X className="w-5 h-5 text-slate-400" />
//                             ) : feature.them === "Add-on" ? (
//                                 <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">Add-on</span>
//                             ) : (
//                                 <span>{feature.them}</span>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };
