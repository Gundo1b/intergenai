"use client"

import React, { useState } from 'react'

export type PollOption = {
    id: string
    text: string
    votes: number
    percentage: number
}

export type PollProps = {
    question: string
    options: PollOption[]
    author: {
        name: string
        username: string
        avatar: string
    }
    stats: {
        views: number
        likes: number
        comments: number
    }
    totalVotes: number
    showResults: boolean
    userVote: string | null
    onVote: (optionId: string) => void
}

export const Poll: React.FC<PollProps> = ({
    question,
    options,
    author,
    stats,
    totalVotes,
    showResults,
    userVote,
    onVote,
}) => {
    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
                <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{author.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@{author.username}</p>
                </div>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{question}</h3>
            <div className="space-y-2 mb-4">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => !showResults && onVote(option.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${showResults
                                ? userVote === option.id
                                    ? 'bg-blue-100 border-blue-300 dark:bg-blue-900 dark:border-blue-700'
                                    : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600'
                                : 'hover:bg-gray-50 border-gray-200 dark:border-gray-600 dark:hover:bg-gray-700'
                            }`}
                        disabled={showResults}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-gray-900 dark:text-white">{option.text}</span>
                            {showResults && (
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {option.votes} ({option.percentage.toFixed(1)}%)
                                </span>
                            )}
                        </div>
                        {showResults && (
                            <div className="mt-2 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                <div
                                    className="bg-blue-500 h-2 rounded-full"
                                    style={{ width: `${option.percentage}%` }}
                                ></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                <span>{totalVotes} votes</span>
                <span>{stats.views} views • {stats.likes} likes • {stats.comments} comments</span>
            </div>
        </div>
    )
}
