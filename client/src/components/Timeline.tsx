import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';

type TimelineNode = {
  id: string;
  year: string;
  professional: {
    title: string;
    description: string;
    active: boolean;
  };
  personal: {
    title: string;
    description: string;
    active: boolean;
  };
  nodeType: 'primary' | 'secondary' | 'accent' | 'future';
};

const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const timelineNodes: TimelineNode[] = [
    {
      id: '2019',
      year: '2019',
      professional: {
        title: t('node2019Prof'),
        description: t('node2019ProfDesc'),
        active: true,
      },
      personal: {
        title: t('node2019Pers'),
        description: t('node2019PersDesc'),
        active: true,
      },
      nodeType: 'primary',
    },
    {
      id: '2020',
      year: '2020',
      professional: {
        title: t('node2020Prof'),
        description: t('node2020ProfDesc'),
        active: true,
      },
      personal: {
        title: t('node2020Pers'),
        description: t('node2020PersDesc'),
        active: false,
      },
      nodeType: 'primary',
    },
    {
      id: '2021',
      year: '2021',
      professional: {
        title: t('node2021Prof'),
        description: t('node2021ProfDesc'),
        active: true,
      },
      personal: {
        title: t('node2021Pers'),
        description: t('node2021PersDesc'),
        active: true,
      },
      nodeType: 'primary',
    },
    {
      id: '2022',
      year: '2022',
      professional: {
        title: t('node2022Prof'),
        description: t('node2022ProfDesc'),
        active: false,
      },
      personal: {
        title: t('node2022Pers'),
        description: t('node2022PersDesc'),
        active: true,
      },
      nodeType: 'primary',
    },
    {
      id: '2023',
      year: '2023',
      professional: {
        title: t('node2023Prof'),
        description: t('node2023ProfDesc'),
        active: true,
      },
      personal: {
        title: t('node2023Pers'),
        description: t('node2023PersDesc'),
        active: false,
      },
      nodeType: 'primary',
    },
    {
      id: '2024',
      year: '2024',
      professional: {
        title: t('node2024Prof'),
        description: t('node2024ProfDesc'),
        active: true,
      },
      personal: {
        title: t('node2024Pers'),
        description: t('node2024PersDesc'),
        active: true,
      },
      nodeType: 'primary',
    },
    {
      id: '2025',
      year: '2025',
      professional: {
        title: t('node2025Prof'),
        description: t('node2025ProfDesc'),
        active: false,
      },
      personal: {
        title: t('node2025Pers'),
        description: t('node2025PersDesc'),
        active: true,
      },
      nodeType: 'accent',
    },
    {
      id: 'future',
      year: '',
      professional: {
        title: t('nodeFutureProf'),
        description: t('nodeFutureProfDesc'),
        active: true,
      },
      personal: {
        title: t('nodeFutureMot'),
        description: t('nodeFutureMotDesc'),
        active: true,
      },
      nodeType: 'future',
    },
  ];

  const getNodeColor = (type: string, isDark: boolean) => {
    const colors = {
      primary: {
        bg: isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800',
        node: 'bg-primary text-white',
        badge: 'bg-blue-100 text-blue-800',
      },
      secondary: {
        bg: isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800',
        node: 'bg-primary text-white',
        badge: 'bg-green-100 text-green-800',
      },
      accent: {
        bg: isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800',
        node: 'bg-primary text-white',
        badge: 'bg-purple-100 text-purple-800',
      },
      future: {
        bg: isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800',
        node: 'bg-gradient-to-r from-primary to-accent text-white',
        badge: 'bg-purple-100 text-purple-800',
      }
    };
    
    return colors[type as keyof typeof colors] || colors.primary;
  };

  const handleNodeClick = (id: string) => {
    setActiveNode(activeNode === id ? null : id);
  };

  return (
    <section className="mb-12" id="timeline">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('timeline')}</h2>
        <p className="text-muted-foreground max-w-3xl">
          {t('timelineDesc')}
        </p>
      </div>
      
      <div className="relative">
        {/* Main Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border transform md:translate-x-px shadow-md rounded-full"></div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Nodes */}
          {timelineNodes.map((node) => {
            const colorScheme = getNodeColor(node.nodeType, isDarkMode);
            
            return (
              <div 
                key={node.id}
                className="mb-12"
              >
                <div className="flex flex-col md:flex-row items-start">
                  {/* Left Side (Professional) - Visible only on md+ */}
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <div className="mb-2 pb-8">
                      <Badge 
                        variant="outline"
                        className="font-medium"
                      >
                        {t('professional')}
                      </Badge>
                      <h3 className="text-lg font-medium mt-2">{node.professional.title}</h3>
                      <p className="text-muted-foreground mt-1">
                        {node.professional.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Node */}
                  <div className="md:absolute md:left-1/2 flex flex-col items-center transform md:-translate-x-1/2 z-10">
                    <button 
                      onClick={() => handleNodeClick(node.id)}
                      className={`${
                        node.id === 'future' ? 'w-10 h-10' : 'w-10 h-10'
                      } rounded-full ${colorScheme.node} flex items-center justify-center font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 ${
                        activeNode === node.id ? 'ring-4 ring-primary ring-opacity-50' : ''
                      }`}
                    >
                      {node.id === 'future' ? (
                        <Zap className="h-6 w-6" />
                      ) : (
                        <span className="text-[10px] font-bold">{node.year}</span>
                      )}
                    </button>
                    <div className="h-16 w-1 bg-primary mt-1 shadow-sm rounded-full"></div>
                  </div>
                  
                  {/* Right Side (Personal) */}
                  <div className="pl-10 md:pl-8 md:w-1/2 mt-2 md:mt-0">
                    <div className="mb-2 pb-8">
                      <Badge 
                        variant="secondary"
                        className="font-medium"
                      >
                        {node.id === 'future' ? t('motivation') : t('personal')}
                      </Badge>
                      <h3 className="text-lg font-medium mt-2">{node.personal.title}</h3>
                      <p className="text-muted-foreground mt-1">
                        {node.personal.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
