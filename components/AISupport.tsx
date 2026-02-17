
import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse, ChatMessage } from '../services/geminiService';

const AISupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setHistory(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateAIResponse(history, input);
    const modelMessage: ChatMessage = { role: 'model', content: responseText };
    setHistory(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {isOpen ? (
        <div className="w-[360px] h-[520px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-probiora-100 transition-all duration-300">
          <div className="p-7 bg-probiora-800 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-bold text-probiora-800">P</div>
              <div>
                <div className="text-sm font-black uppercase tracking-wider">Health Specialist</div>
                <div className="text-[10px] text-probiora-300 font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Clinician Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-7 overflow-y-auto space-y-5 bg-probiora-50/30">
            {history.length === 0 && (
              <div className="text-center py-10">
                <div className="text-probiora-300 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Consultation</div>
                <p className="text-slate-600 text-sm font-light">How can I help you improve your oral microbiome today?</p>
              </div>
            )}
            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-probiora-800 text-white shadow-lg' 
                  : 'bg-white text-slate-700 shadow-sm border border-probiora-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-probiora-100 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-probiora-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-probiora-300 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-probiora-300 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-5 bg-white border-t border-probiora-50 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a specialist..."
              className="flex-grow px-5 py-3 bg-probiora-50/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-probiora-400 transition-all border border-transparent"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-12 h-12 bg-probiora-800 text-white rounded-2xl flex items-center justify-center hover:bg-probiora-700 transition-all disabled:opacity-50 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-probiora-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all transform"
        >
          <div className="absolute inset-0 bg-probiora-400 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default AISupport;
