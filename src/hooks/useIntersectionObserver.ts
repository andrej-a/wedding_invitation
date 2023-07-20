import { useEffect } from 'react';

import { numberConstants } from '@/components/types/constants';

const { INTERSECTION_OBSERVER_DELAY, componentOpacityDelay } = numberConstants;
const useIntersectionObserver = (
    refs: React.RefObject<HTMLButtonElement | HTMLDivElement>[],
) => {
    useEffect(() => {
        function onEntry(entry: any[]) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    setTimeout(() => {
                        change.target.style.opacity = 1;
                    }, INTERSECTION_OBSERVER_DELAY);
                    setTimeout(() => {
                        change.target.style.transition = 'all .3s ease';
                    }, componentOpacityDelay);
                }
            });
        }

        const options = {
            threshold: [1],
        };
        const observer = new IntersectionObserver(onEntry, options);

        refs.forEach(r => {
            observer.observe(r.current as Element);
        });
    }, []);
};

export default useIntersectionObserver;
