import React from 'react';
import '../../sass/components/_icons.scss';
import Add from '../../sass';
import AddThin from '../../sass/icons/';
import Candle from '../../sass/icons/';
import Close from '../../sass/icons/';
import Comparison from '../../sass/icons/';
import Crosshair from '../../sass/icons/';
import Delete from '../../sass/icons/';
import Dot from '../../sass/icons/';
import Download from '../../sass/icons/';
import Draw from '../../sass/icons/';
import HollowCandle from '../../sass/icons/';
import Indicator from '../../sass/icons/';
import Line from '../../sass/icons/';
import List from '../../sass/icons/';
import Measure from '../../sass/icons/';
import Minus from '../../sass/icons/';
import OHLC from '../../sass/icons/';
import Spline from '../../sass/icons/';
import Star from '../../sass/icons/';
import Template from '../../sass/icons/';
import Warning from '../../sass/icons/';
import Active from '../../sass/icons/';
import Commodities from '../../sass/icons/';
import Favorite from '../../sass/icons/';
import Forex from '../../sass/icons/';
import Indices from '../../sass/icons/';
import Stocks from '../../sass/icons/';
import Volidx from '../../sass/icons/';
import Search from '../../sass/icons/';
import Edit from '../../sass/icons/';
import IndicatorCategory from '../../sass/icons/';

import SymbolPlaceholder from '../../sass/icons/';
import AUD from '../../sass/icons/flags/aud.svg';
import CAD from '../../sass/icons/flags/cad.svg';
import CHF from '../../sass/icons/flags/chf.svg';
import EUR from '../../sass/icons/flags/eur.svg';
import GBP from '../../sass/icons/flags/gbp.svg';
import JPY from '../../sass/icons/flags/jpy.svg';
import MXN from '../../sass/icons/flags/mxn.svg';
import NOK from '../../sass/icons/flags/nok.svg';
import NZD from '../../sass/icons/flags/nzd.svg';
import PLN from '../../sass/icons/flags/pln.svg';
import SEK from '../../sass/icons/flags/sek.svg';
import USD from '../../sass/icons/flags/usd.svg';

const Wrapper = WrappedComponent => props => {
    let { className, ['tooltip-title']: tooltip, ...p } = props;
    className = `ic-icon ${className ? className : ''} ${tooltip ? 'tooltip' : ''}`;

    return (
        <span
            className={className}
            tooltip-title={tooltip}
            {...p}>
            <WrappedComponent />
        </span>
    );
};

export const AddIcon = Wrapper(Add);
export const AddThinIcon = Wrapper(AddThin);
export const CandleIcon = Wrapper(Candle);
export const CloseIcon = Wrapper(Close);
export const ComparisonIcon = Wrapper(Comparison);
export const CrosshairIcon = Wrapper(Crosshair);
export const DeleteIcon= Wrapper(Delete);
export const DotIcon = Wrapper(Dot);
export const DownloadIcon = Wrapper(Download);
export const DrawIcon = Wrapper(Draw);
export const HollowCandleIcon = Wrapper(HollowCandle);
export const IndicatorIcon = Wrapper(Indicator);
export const LineIcon = Wrapper(Line);
export const ListIcon = Wrapper(List);
export const MeasureIcon = Wrapper(Measure);
export const MinusIcon = Wrapper(Minus);
export const OHLCIcon = Wrapper(OHLC);
export const SplineIcon = Wrapper(Spline);
export const StarIcon = Wrapper(Star);
export const TemplateIcon = Wrapper(Template);
export const WarningIcon = Wrapper(Warning);
export const SearchIcon = Wrapper(Search);
export const EditIcon = Wrapper(Edit);

export const SymbolPlaceholderIcon = Wrapper(SymbolPlaceholder);

export const CategoryIconMap = {
    active: Wrapper(Active),
    commodities: Wrapper(Commodities),
    favorite: Wrapper(Favorite),
    forex: Wrapper(Forex),
    indices: Wrapper(Indices),
    stocks: Wrapper(Stocks),
    volidx: Wrapper(Volidx),
    indicators: Wrapper(IndicatorCategory)
};

const FlagIconMap = {
    aud: Wrapper(AUD),
    cad: Wrapper(CAD),
    chf: Wrapper(CHF),
    eur: Wrapper(EUR),
    gbp: Wrapper(GBP),
    jpy: Wrapper(JPY),
    mxn: Wrapper(MXN),
    nok: Wrapper(NOK),
    nzd: Wrapper(NZD),
    pln: Wrapper(PLN),
    sek: Wrapper(SEK),
    usd: Wrapper(USD),
};

export const ItemIconMap = {};

function frx(a, b) {
    const A = FlagIconMap[a];
    const B = FlagIconMap[b];
    ItemIconMap[`frx${a}${b}`] = props => {
        let { className, ...p } = props;
        className = `ic-frx ${className}`;
        return (
            <span className={className} {...p}><A/><B/></span>
        );
    };
}

function wld(a) {
    ItemIconMap[`wld${a}`] = FlagIconMap[a];
}

/* FOREX */
/* Major Pairs */
frx('aud', 'jpy');
frx('aud', 'usd');
frx('eur', 'aud');
frx('eur', 'chf');
frx('eur', 'jpy');
frx('eur', 'cad');
frx('eur', 'gbp');
frx('eur', 'usd');
frx('gbp', 'aud');
frx('gbp', 'jpy');
frx('gbp', 'usd');
frx('usd', 'cad');
frx('usd', 'chf');
frx('usd', 'jpy');
/* Minor Pairs */
frx('aud', 'cad');
frx('aud', 'chf');
frx('aud', 'nzd');
frx('aud', 'pln');
frx('eur', 'nzd');
frx('gbp', 'cad');
frx('gbp', 'chf');
frx('gbp', 'nok');
frx('gbp', 'nzd');
frx('gbp', 'pln');
frx('nzd', 'jpy');
frx('nzd', 'usd');
frx('usd', 'mxn');
frx('usd', 'nok');
frx('usd', 'pln');
frx('usd', 'sek');

/* Smart FX */
wld('aud');
wld('eur');
wld('gbp');
wld('usd');

export const ActiveOptionsIconMap = {
    delete: DeleteIcon,
    edit: EditIcon,
};
