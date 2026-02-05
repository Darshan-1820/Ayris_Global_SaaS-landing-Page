"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodesLabels = [
    { id: 1, label: "Issuing", text: "Global Card Issuance" },
    { id: 2, label: "Acquiring", text: "Multi-scheme Acceptance" },
    { id: 3, label: "Processing", text: "Real-time Logic" },
    { id: 4, label: "Testing", text: "Auto L3 Certification" },
    { id: 5, label: "Security", text: "PCI-DSS Compliant" },
    { id: 6, label: "Wallet", text: "Tokenization Engine" },
    { id: 7, label: "Reporting", text: "Live Transaction Data" },
    { id: 8, label: "Gateway", text: "Unified API Access" },
    { id: 9, label: "Compliance", text: "KYC & AML Checks" },
    { id: 10, label: "Analytics", text: "Data Insights" },
  ];

export default function NetworkVisual() {
  const [activeNode, setActiveNode] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <div className="relative w-full h-full">
       <CanvasLogic 
         nodesData={nodesLabels} 
         setActiveNode={setActiveNode} 
         activeNode={activeNode}
         setTooltipPos={setTooltipPos}
       />
       
       {/* HTML Overlay for Tooltips */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            {activeNode && (
               <motion.div
                 key={activeNode.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.2 }}
                 className="absolute pointer-events-auto bg-white/95 backdrop-blur-md shadow-xl border border-blue-100 p-4 rounded-xl min-w-[200px] text-center z-10"
                 style={{ 
                     left: tooltipPos.x,
                     top: tooltipPos.y,
                     transform: 'translate(-50%, -120%)' // Shift up and center so it floats above
                 }}
               >
                 <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{activeNode.label}</div>
                 <div className="text-gray-900 font-bold text-lg leading-tight">{activeNode.text}</div>
                 <div className="flex justify-center mt-2 gap-1.5">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: `${i * 150}ms`}} />)}
                 </div>
                 {/* Little arrow at bottom */}
                 <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-blue-100" />
               </motion.div>
            )}
          </AnimatePresence>
       </div>
    </div>
  );
}

function CanvasLogic({ nodesData, setActiveNode, activeNode, setTooltipPos }) {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const nodesRef = useRef([]); // Store nodes in ref to avoid re-initialization
    const activeNodeRef = useRef(activeNode);

    // Sync ref
    useEffect(() => {
        activeNodeRef.current = activeNode;
    }, [activeNode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        // Handle Mouse Move Globally to avoid z-index blocking
        const handleWindowMouseMove = (e) => {
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
            }
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        let animationFrameId;

        const resize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                
                if (nodesRef.current.length === 0) {
                   initNodes();
                }
            }
        };

        const initNodes = () => {
             const width = canvas.width;
             const height = canvas.height;
             const textBoundary = width < 768 ? 0 : width * 0.55; // Strict 55% split to avoid text overlap
             
             const extraNodesCount = 30; 
             const allNodes = [];

             // Labeled nodes - Distribute strategically on the right
             nodesData.forEach((data, i) => {
                 allNodes.push({
                     ...data,
                     type: 'label',
                     x: textBoundary + Math.random() * (width - textBoundary),
                     y: Math.random() * height,
                     vx: (Math.random() - 0.5) * 0.15, 
                     vy: (Math.random() - 0.5) * 0.15,
                     radius: 4
                 });
             });
             
             // Filler nodes - Distribute on the right
             for (let i = 0; i < extraNodesCount; i++) {
                 allNodes.push({
                     id: `filler-${i}`,
                     type: 'filler',
                     x: textBoundary + Math.random() * (width - textBoundary),
                     y: Math.random() * height,
                     vx: (Math.random() - 0.5) * 0.08, 
                     vy: (Math.random() - 0.5) * 0.08,
                     radius: 2 
                 });
             }
             
             nodesRef.current = allNodes;
        };

        // Initial setup
        resize();
        window.addEventListener('resize', resize);
        
        // Auto Selection Loop
        const selectionInterval = setInterval(() => {
            const width = canvas.width;
            
            // Filter nodes that are visible/active
            const availableNodes = nodesRef.current.filter(n => n.type === 'label');
            
            if (availableNodes.length > 0) {
                const randomNode = availableNodes[Math.floor(Math.random() * availableNodes.length)];
                setActiveNode(randomNode);
            }
        }, 2500);

        const render = () => {
            const width = canvas.width;
            const height = canvas.height;
            const textBoundary = width < 768 ? 0 : width * 0.55;

            ctx.clearRect(0, 0, width, height);
            
            const activeData = activeNodeRef.current;
            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;

            // Physics & Update
            nodesRef.current.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce from edges and text boundary
                if (node.x < textBoundary) { node.x = textBoundary; node.vx *= -1; }
                if (node.x > width) { node.x = width; node.vx *= -1; }
                if (node.y < 0) { node.y = 0; node.vy *= -1; }
                if (node.y > height) { node.y = height; node.vy *= -1; }
                
                // Track active node position
                if (activeData && activeData.id === node.id) {
                     setTooltipPos({ x: node.x, y: node.y });
                }
            });

            // Draw Connections
            const nodes = nodesRef.current;
            
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeA = nodes[i];
                    const nodeB = nodes[j];
                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    
                    const maxDist = 180;
                    if (dist < maxDist) {
                        const opacity = 1 - (dist / maxDist);
                        
                        ctx.beginPath();
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `rgba(10, 124, 255, ${opacity * 0.35})`; // Blue connections
                        ctx.stroke();
                    }
                }
            }

            // Draw Mouse Connections - with boundary check
            if (mouseX > textBoundary) {
                nodes.forEach(node => {
                    const dx = node.x - mouseX;
                    const dy = node.y - mouseY;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 250) {
                        const opacity = 1 - (dist / 250);
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.6})`; // Orange interaction
                        ctx.stroke();
                    }
                });
            }

            // Draw Nodes
            nodes.forEach(node => {
                const isActive = activeData && activeData.id === node.id;
                const isLabel = node.type === 'label';

                // Glow (only active)
                if (isActive) {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(249, 115, 22, 0.25)";
                    ctx.fill();
                }

                // Node Rendering
                ctx.beginPath();
                // Labels are big, fillers are small
                let radius = isLabel ? 5 : 3;
                
                ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
                
                if (isActive) {
                    ctx.fillStyle = "#F97316"; 
                } else {
                    // BLUE Nodes again
                    ctx.fillStyle = isLabel ? "#0A7CFF" : "#60A5FA";
                }
                ctx.fill();
                
                // White Border for labels or active
                if (isLabel || isActive) {
                    ctx.strokeStyle = "white";
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleWindowMouseMove);
            clearInterval(selectionInterval);
            cancelAnimationFrame(animationFrameId);
        };
    }, [nodesData, setActiveNode, setTooltipPos]);

    // Removed local mouse handlers since we use window listener
    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full"
        />
    );
}
