import { useCallback, useContext, useState } from 'react';
import { fetchJson } from '@/utils/api';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import UserContext from '@/contexts/UserContext';

const useGenerateAnswer = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);

  const generateAnswer = async (text: string): Promise<{ isOk: boolean; answer: string }> => {
    setIsLoading(true);
    setIsAnswering(true);

    try {
      if (!user?.token) {
        throw new Error('User token is not found');
      }

      const response = await fetchJson<string>('/api/agent/gemini', {
        method: 'POST',
        body: JSON.stringify({ msg: text }),
        headers: {
          'x-custom-token': user.token,
        },
      });

      const markdownToHtml = async (markdown: string) => {
        const result = await remark().use(gfm).use(html).process(markdown);
        return result.toString();
      };

      const htmlContent = await markdownToHtml(response);
      setIsLoading(false);
      return { isOk: true, answer: htmlContent };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      setIsLoading(false);
      return { isOk: false, answer: '' };
    }
  };

  const handleFinishAnswering = useCallback(() => {
    setIsAnswering(false);
  }, []);

  return { error, isLoading, isAnswering, generateAnswer, handleFinishAnswering };
};

export default useGenerateAnswer;
