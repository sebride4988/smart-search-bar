import React from 'react';
import category from './category.json';
import './keyword-window.scss';
import { rangeSearchArray } from 'util/hangul';
import { partialBold } from 'util/string';

interface Props {
  isShow: boolean;
  keyword: string;
}

function KeywordWindow({ isShow, keyword }: Props) {
  const { filterredArray, charRange } = rangeSearchArray(keyword, category);
  return (
    <div id="KeywordWindow" className={isShow ? undefined : 'none'}>
      {filterredArray.map((item, i) =>
        charRange.length > 0 ? (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html: partialBold(item, charRange[i][0]),
            }}
          />
        ) : (
          <p key={i}>{item}</p>
        )
      )}
    </div>
  );
}

export default KeywordWindow;
