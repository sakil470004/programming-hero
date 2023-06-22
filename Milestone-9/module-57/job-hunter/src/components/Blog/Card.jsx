import React from 'react';

const Card = ({ data }) => {
    return (
        <div tabIndex={data.id} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-7">
            <div className="collapse-title text-4xl font-medium text-red-400">
                {data.question}
            </div>
            <div className="collapse-content text-2xl">
                <p>
                    {data.ans}
                </p>
            </div>
        </div>

    );
};

export default Card;